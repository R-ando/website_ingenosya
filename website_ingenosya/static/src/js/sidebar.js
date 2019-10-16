$(document).ready(function() {
	/*$('.list-group-item').click(function(e) {
        // ne pas prendre en compte le premier élément
		if ($(this).index() != 0) {
			e.preventDefault();
			$('.list-group-item').removeClass('active');
			$(this).addClass('active');
		}
	});*/

  // au clic sur un lien ayant une class=scroll-reference
  $('a.scroll-reference').on('click', function(e){
    // ne pas prendre en compte le premier élément
    // if ($(this).index() != 0) {
    //     e.preventDefault();
    //     $('.list-group-item').removeClass('active');
    //     $(this).addClass('active');
    // }
    
    // bloquer le comportement par défaut: on ne rechargera pas la page
    e.preventDefault(); 
    // enregistre la valeur de l'attribut  href dans la variable target
    var target = $(this).attr('href');
    /* le sélecteur $(html, body) permet de corriger un bug sur chrome et safari (webkit) */
    // récupération de la hauteur du header
    var header_height = $("header").height();
    $('html, body')
    // on arrête toutes les animations en cours 
    .stop()
    /* on fait maintenant l'animation vers le haut (scrollTop) vers 
    notre ancre target */
    .animate({scrollTop: $(target).offset().top - header_height - 120}, 1000 );
  });

});

