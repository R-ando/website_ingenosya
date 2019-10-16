$(document).ready(function () {
//	$('.para_iteration1,.para_iteration2').addClass('base');
	$('.titre_iteration').addClass('base');
	$('.para_qlt1').addClass('active_para_qlt1');
//	$('.para_agile1').addClass('base');
//	$('#img_agile1').addClass('base');
//	$('.icone_forfait').addClass('base');
//	$('.social_forfait').addClass('active_icone_fortait');
//	$('#img-regie1').addClass('base');
	$('.para_bref1,#bref2,.titre_bref').addClass('base');
	$('.para_erp2,.titre_regie,.titre_tma, #img_titre_bi,.para_bi1,.titre_bi').addClass('base');
	$('.para_odoo1,.para_odoo2').addClass('base');
	$('.para_web3,#img_web2, #img-odoo1, #img-odoo2').addClass('base');
//	$('.para_presentation2,.para_presentation3').addClass('base');

	/* add font awesome fa-home*/
	var home = $("#top_menu li")[0];
	home.innerHTML = "<a href='" + document.location.origin + "' id='home' aria-hidden='true'><span class='fa fa-home' /><span style='font-family: roboto, Helvetica, Arial, sans-serif;font-weight: bold;'> Accueil</span></a>";

}, 2000);

/* add animate content quality*/
$(window).scroll(function () {
	if ($(document).scrollTop() > 280) {
		$(".para_qlt2").addClass('base');
	}
});
// add function in hover agility
$(function(){
    $("[data-toggle=tooltip]").popover();
});
/* add animate content quality*/
$(window).scroll(function () {
	if ($(document).scrollTop() > 480) {
//		$(".para_qlt3").addClass('base');
		$("#img_qlt3").addClass('base');
//		$("#img-erp2").addClass('base');
	}
});
var position;
/*$(window).scroll(function () {
	if ($(document).scrollTop() > 400) {
		$(".scrum1").addClass('active_agile');
	}
});*/

//$(window).scroll(function () {
//	if ($(document).scrollTop() > 1000) {
//		$(".para_qlt4").addClass('base');
//	}
//});

//$(window).scroll(function () {
//	if ($(document).scrollTop() > 100) {
//		$('.para_web4, .para_web5, #img_web10').addClass('testclass');
//
//	}
//});

//$(window).scroll(function () {
//	if ($(document).scrollTop() > 300) {
//		$('.para_odoo3, .border-odoo').addClass('testclass');
//	}
//});

$(window).scroll(function () {
	if ($(document).scrollTop() > 1000) {
		$('.Spécialités').addClass('fadeInLeft,animated');
	}
});

/* srolling back to home button footer*/
$(document).ready(function () {
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
$(document).ready(function() {
	$(".back-to-top").click(function(e) {
		//$(window).scrollTop(0);
		$('html, body').animate({scrollTop: 0}, 700);
	});
});

/* add animate title technologie*/
$(window).scroll(function () {
	if ($(document).scrollTop() > 1200) {
		$('.titre_techno').addClass('base');
	}
});

/*simple click ou double click */
	var headerHeight = $("header").height() + 120;
    var top_menus_all = $("#top_menu li > a");
    var top_menus = $("#top_menu li > a.dropdown-toggle");
    var template = $('#titre_bref').position();
    $(document).ready(function() {
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
			$(".navbar-default .navbar-nav > li > a.dropdown-toggle").dblclick(function (e) {
			var div_target = $(e.target).text().trim();
			// console.log("===div_target = ", div_target);
			if (div_target === "Présentation") {
				window.location.href = document.location.origin + "/page/presentation";
			}
		});
	

	/*add function dblclick pages Spécialités*/
			$(".navbar-default .navbar-nav > li > a.dropdown-toggle").dblclick(function (e) {
			var div_target = $(e.target).text().trim();
			// console.log("===div_target = ", div_target);
			if (div_target === "Spécialités") {
				window.location.href = document.location.origin + "/page/specialites";
			}
		});
	});
