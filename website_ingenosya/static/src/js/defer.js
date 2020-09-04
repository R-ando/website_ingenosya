$(document).ready(function () {
    
    //clic spécialité
    $('.to-click').on('click', function (e) {
        var link = $(this).attr('title');
        link = document.location.origin + '/page/' + link;
        window.location.href = link;
    });

    window.onorientationchange = function () {
        //var portraitOrientation = window.matchMedia("(orientation:portrait)"); /*Get orientation*/
        var url = window.location.href;
        var res = url.split('/');
        var current_page = res[res.length - 1];
        var pages = ['a-qui-s-adresse-t-on', 'rejoignez-nous', 'recrutement'];
        if (pages.includes(current_page)) {
            window.location.reload(true);
        }
    }
    /* add animate content quality*/
    $(window).scroll(function () {
        if ($(document).scrollTop() > 280) {
            $(".para_qlt2").addClass('base');
        }
    });
    /* add animate content quality*/
    $(window).scroll(function () {
        if ($(document).scrollTop() > 480) {
            //		$(".para_qlt3").addClass('base');
            $("#img_qlt3").addClass('base');
            //		$("#img-erp2").addClass('base');
        }
    });
    $(window).scroll(function () {
        if ($(document).scrollTop() > 1000) {
            $('.Spécialités').addClass('fadeInLeft,animated');
        }
    });
    /* srolling back to home button footer*/

    $('a[href*=#]:not([href=#])').click(function () {
        if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') ||
            location.hostname == this.hostname) {
            var target = $(this.hash);
            target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
            if (target.length) {
                $('html,body').animate({ scrollTop: 0 }, "slow");
                return false;
            }
        }
    });
    /* show button srolling back home*/
    $(window).scroll(function () {
        if ($(document).scrollTop() > 300) {
            $('.back-to-top').addClass('vue');
        } else {
            $('.back-to-top').removeClass('vue');
        }
    });

    /* on click back to up */
    $(document).ready(function () {
        $(".back-to-top").click(function (e) {
            //$(window).scrollTop(0);
            $('html, body').animate({ scrollTop: 0 }, 700);
        });
    });

    /* add animate title technologie*/
    $(window).scroll(function () {
        if ($(document).scrollTop() > 1200) {
            $('.titre_techno').addClass('base');
        }
    });


    $(".navbar-default .navbar-nav > li > a.dropdown-toggle").click(function(e) {
        var div_target = $(e.target).text().trim();
        if ($('.' + div_target).offset() != undefined) {
            $('html, body').animate({
                scrollTop: $("." + div_target).offset().top - headerHeight
            }, 1000);
        }
    });

    /*add function simpleClick page Prestation*/
    $(".navbar-default .navbar-nav > li > a.dropdown-toggle").click(function (e) {
        var div_target = $(e.target).text().trim();
        if (div_target === "Prestations") {
            window.location.href = document.location.origin + "/page/prestations";
        }
    });
    /*add function simpleClick page Contact*/
			$(".navbar-default .navbar-nav > li > a.dropdown-toggle").click(function (e) {
                var div_target = $(e.target).text().trim();
    
                if (div_target === "Contact") {
                    window.location.href = document.location.origin + "/page/contact";
                }
            });
        
    
        /*add function dblclick page Présentations*/
                $(".navbar-default .navbar-nav > li > a.dropdown-toggle").click(function (e) {
                var div_target = $(e.target).text().trim();
                // console.log("===div_target = ", div_target);
                if (div_target === "Présentation") {
                    window.location.href = document.location.origin + "/page/presentation";
                }
            });
        
    
        /*add function dblclick pages Spécialités*/
                $(".navbar-default .navbar-nav > li > a.dropdown-toggle").click(function (e) {
                var div_target = $(e.target).text().trim();
                // console.log("===div_target = ", div_target);
                if (div_target === "Spécialités") {
                    window.location.href = document.location.origin + "/page/specialites";
                }
            });
})
