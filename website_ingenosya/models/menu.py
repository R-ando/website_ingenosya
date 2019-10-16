# -*- coding: utf-8 -*-

from odoo import api, fields, models


class WebsiteMenu(models.Model):

    _inherit = 'website.menu'

    url2 = fields.Char('URL 2')
    level = fields.Char('Level')
