# -*- coding: utf-8 -*-

from odoo import models, fields


class ResPartner(models.Model):
    _inherit = 'res.partner'

    cahier_de_charge = fields.Binary(string="Cahier de charge")
    nom_cahier_de_charge = fields.Char(string="Nom Fichier")
    has_cahier_de_charge = fields.Boolean(string=u"A un cahier de charge ?")
