odoo.define('website_ingenosya.menu_animations', function (require) {
    'use strict';

    var contentMenu = require('website.contentMenu');
    contentMenu.TopBar.include({
        start: function() {
            var self = this;
            this._super();        
            var headerHeight = $("header").height() + 150;
            var top_menus_all = $("#top_menu li > a");          
            var top_menus = $("#top_menu li > a.dropdown-toggle");          
            var template = $('#titre_bref').position();
            $(document).ready(function(){        
                $(".navbar-default .navbar-nav > li > a.dropdown-toggle").click(function() { 
                    var div_target = $(event.target).text().trim();
                    /* var div_target =textContent.trim();*/
                    if ($('.' + div_target).offset() != undefined) {
                        $('html, body').animate({
                            scrollTop: $("." + div_target).offset().top - headerHeight
                        }, 1000);
                    }
                });
            }); 
        }
    });
});  


