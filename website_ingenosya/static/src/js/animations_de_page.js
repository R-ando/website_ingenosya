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


// add function in hover agility
$(function(){
    $("[data-toggle=tooltip]").popover();
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









/*simple click ou double click */
	var headerHeight = $("header").height() + 120;
    var top_menus_all = $("#top_menu li > a");
    var top_menus = $("#top_menu li > a.dropdown-toggle");
    var template = $('#titre_bref').position();
    $(document).ready(function() {
       
	});
