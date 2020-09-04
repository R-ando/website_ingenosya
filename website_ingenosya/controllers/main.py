# -*- coding: utf-8 -*-

from odoo import http, SUPERUSER_ID, tools
from odoo.http import request
# import html2text

import base64
import werkzeug.utils
from HTMLParser import HTMLParser


class MLStripper(HTMLParser):
    def __init__(self):
        self.reset()
        self.fed = []
    
    def handle_data(self, d):
        self.fed.append(d)
    
    def get_data(self):
        return ''.join(self.fed)


def strip_tags(html):
    s = MLStripper()
    s.feed(html)
    return s.get_data()


class WebsiteIngenosya(http.Controller):
    
    @http.route('/page/envoyer-une-demande-de-devis/', method="[POST]", auth="public", website=True, csrf=False)
    def devis(self, ufile, **kwargs):
        
        ste = http.request.httprequest.form["societe"]
        nom = http.request.httprequest.form["nom"]
        tel = http.request.httprequest.form["tel"]
        email = http.request.httprequest.form["email"]
        besoin = http.request.httprequest.form["besoin"]
        captcha= http.request.httprequest.form['g-recaptcha-response']

        obj_ste = http.request.env['res.partner'].sudo().create({'name': ste, 'is_company': True})

        if captcha:
            if not ufile:
                partner = http.request.env['res.partner'].sudo().create({
                'name': nom,
                'parent_id': obj_ste.id,
                'customer': True,
                'comment': besoin,
                'phone': tel,
                'email': email,
                })
            else:
                fichier = base64.b64encode(ufile.read())
                ftype = ufile.content_type
                fname = ufile.filename
                partner = http.request.env['res.partner'].sudo().create({
                'name': nom,
                'parent_id': obj_ste.id,
                'customer': 'TRUE',
                'comment': besoin,
                'phone': tel,
                'email': email,
                'cahier_de_charge': fichier,
                'nom_cahier_de_charge': fname,
                'has_cahier_de_charge': True,
                })

            order = http.request.env['sale.order'].sudo().create({'partner_id': partner.id})
            user = http.request.env['res.users'].sudo().browse(SUPERUSER_ID)
            email_to = user.company_id.email or 'sales@ingenosya.com'

            # Sending mail
            nom = u"" + nom
            ste = u"" + ste
            tel = u"" + tel
            email = u"" + email
            
            besoin = tools.plaintext2html(besoin)
            body = '<div style="font-family: roboto, Helvetica, Arial, sans-serif;font-size: 14px;"><p>Bonjour,</p><p>' +\
                besoin + '</p><br><p>Cordialement,</p><br><div style="color: #808080;"><span>' + nom + '</span><br><span>' +\
                ste + '</span><br><span>Tel : ' + tel + '</span><br><span>Mail : ' + email + '</span></div></div>'
            subject = 'Demande de devis [' + order.name + ']'
            mail_values = {
                'subject': subject,
                'email_from': email,
                'email_to': email_to,
                'body_html': body,
                'model': 'sale.order',
                'res_id': order.id,
                'message_type': 'email',
                # 'attachment_ids': [(4, attachment.id)],
            }
            mail = http.request.env['mail.mail'].sudo().create(mail_values)
            
            # Add attachment in mail
            attachment_ids = []
            if ufile:
                values = {
                    'name': fname,
                    'datas_fname': fname,
                    'datas': fichier,
                    'res_model': 'sale.order',
                    'res_id': order.id,
                    }
                attachment = http.request.env['ir.attachment'].sudo().create(values)
                attachment_ids.append(attachment.id)
                mail.write({'attachment_ids': [(4, attachment.id)]})

            # Add comment in order
            order_mail_values = {
                'body': body,
                'record_name': '', 
                'no_auto_thread': False, 
                'attachment_ids': [], 
                'email_from': email, 
                'partner_ids': [], 
                'author_id': SUPERUSER_ID, 
                'subject': 'Envoie demande de devis',
            }
            order.sudo().message_post(type='comment', subtype='mail.mt_comment', context=None, **order_mail_values)

            mail.send()

                    ###########################   Acknowledgment of receipt    ####################################
            body_response = '''<p>Bonjour,</p>
                        <p>Nous accusons bonne réception de votre demande de devis.</p>
                        <p>Nous reviendrons vers vous dans un délai maximum de 3 jours ouvrés.</p>
                        <p>Dans l’attente, veuillez trouver dans le lien ci-après notre plaquette commerciale <br/><a href="https://www.ingenosya.com/website_ingenosya/static/src/documents/Plaquette_Commerciale_Ingenosya_2018.pdf">(https://www.ingenosya.com/website_ingenosya/static/src/documents/Plaquette_Commerciale_Ingenosya_2018.pdf)</a>, <br/>contenant de plus amples informations sur nos offres et sur INGENOSYA.</p>
                        <p>Nous restons à votre entière disposition pour toutes informations complémentaires et vous remercions pour la confiance que vous accordez à INGENOSYA,<p>
                        <p>Très cordialement,<p>
                        <p>L’équipe Commerciale d’INGENOSYA<p>'''

            mail_response_values = {
                'subject': 'Accusé de réception demande de devis',
                'email_from': email_to,
                'email_to': email,
                'body_html': body_response,
                'model': 'sale.order',
                'res_id': order.id,
                'message_type': 'email',
            }

            mail_response = http.request.env['mail.mail'].sudo().create(mail_response_values)

            '''order_mail_response_values = {
                                        'body': body_response,
                                        'record_name': '', 
                                        'no_auto_thread': False, 
                                        'attachment_ids': [], 
                                        'email_from': email_to, 
                                        'partner_ids': [], 
                                        'author_id': SUPERUSER_ID, 
                                        'subject': 'Accusé de réception demande de devis',
                                    }
                                    order.sudo().message_post(type='comment', subtype='mail.mt_comment', context=None, **order_mail_response_values)'''
            mail_response.send()

            ######################################################################################
            
            return werkzeug.utils.redirect("/page/demande-de-devis-envoyee")

    @http.route('/page/recherche/', method=['POST'], auth='public', website=True, csrf=False)
    def recherche(self, **kwargs):
        import re
        
        recherche = http.request.httprequest.form["recherche"]
        result = recherche.strip()
        nbr_char = len(result)
        
        if nbr_char <= 2:
            return http.request.render('website_ingenosya.erreur-recherche', {})

        result = result.split(' ')
        res = []
        nbr_res = 0
        nbr_char = 700
        
        for key in result:
            req = http.request.env['ir.ui.view'].sudo().search([('type', '=', 'qweb'), ('page', '=', True), ('arch_fs', 'like', 'website_ingenosya%'), ('arch_db', 'ilike', '%' + key + '%')])
            for r in req:
                name = r.name
                text = strip_tags(r.arch_db).strip()
                if text.find(name) == 0:
                    # Delete title
                    text = text.replace(name, '')
                
                if key.upper() in text.upper():
                    text = re.sub("(?i)" + key, "<b>" + key.upper() + "</b>", text)
                    # occ = text.count(key.upper())
                    
                    if len(text) > nbr_char:
                        text = text[:nbr_char] + ' ...'
                    res.append({
                        'name': name,
                        'url': r.key.split('.')[1],
                        'text': text,
                    })
                    nbr_res = nbr_res + 1

        return http.request.render('website_ingenosya.recherche', {
            'path': '/page/recherche',
            'result': res,
            'nbr_res': nbr_res,
            })