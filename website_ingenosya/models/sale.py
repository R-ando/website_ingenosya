# -*- coding: utf-8 -*-

from odoo import models, fields


class SaleOrder(models.Model):
    _inherit = 'sale.order'

    cahier_de_charge = fields.Binary(string="Cahier de charge")