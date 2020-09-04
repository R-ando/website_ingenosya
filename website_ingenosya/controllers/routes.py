from odoo import http
class Route(http.Controller):
    @http.route('/prestataire-digitale-agence-digitale',auth="public",website=True)
    def prestations(self, **kw):
        return http.request.render('website.prestations')
    

    @http.route('/realisation-developpement-logiciel-entreprise-madagascar',auth="public",website=True)
    def logicielParForfait(self,**kw):
        return http.request.render('website.realisation-logiciel-au-forfait')


    @http.route('/realisation-logiciel-entreprise-madagascar',auth="public",website=True)
    def logicielParIteration(self,**kw):
        return http.request.render('website.realisation-logiciel-par-iteration')
    

    @http.route('/developpeur-logiciel-gestion-entreprise-regie-madagascar',auth="public",website=True)
    def logicielEnRegie(self,**kw):
        return http.request.render('website.developpement-logiciel-en-regie')
    

    @http.route('/solution-numerique-tierce-maintenance-applicative',auth="public",website=True)
    def TierceMaintenanceApplicative(self,**kw):
        return http.request.render('website.tierce-maintenance-applicative')
    

    @http.route('/specialiste-creation-back-office-odoo-angular-framework-application',auth="public",website=True)
    def specialite(self,**kw):
        return http.request.render('website.specialites')

    @http.route('/creation-logiciel-erp-entreprise-ressource-planning',auth="public",website=True)
    def entrepriseRessourcePlanning(self,**kw):
        return http.request.render('website.entreprise-ressource-planning')
    

    @http.route('/createur-developpeur-logiciel-business-intelligence',auth="public",website=True)
    def businessIntelligence(self,**kw):
        return http.request.render('website.business-intelligence')

    
    @http.route('/creation-developpeur-application-mobile-web-progressive-web-app',auth="public",website=True)
    def webEtApplicationMobile(self,**kw):
        return http.request.render('website.web-et-applications-mobiles')

    
    @http.route('/odoo-open-erp-entreprise-madagascar',auth="public",website=True)
    def odooChezIngenosya(self,**kw):
        return http.request.render('website.odoo-chez-ingenosya')