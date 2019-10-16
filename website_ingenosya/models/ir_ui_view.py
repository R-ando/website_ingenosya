# -*- coding: utf-8 -*-

from odoo import fields, models


class view(models.Model):

    _inherit = "ir.ui.view"

    searchable = fields.Boolean(string='Show in search results', default=False)