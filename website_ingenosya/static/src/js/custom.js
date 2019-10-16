$(document).ready(function(){
  

  $(".navbar-default").addClass('fixed');
  $(window).scroll(function(){
    if($(document).scrollTop() > 180) {
      $(".navbar-default").addClass('bgwhite');   
    }else{
      $(".navbar-default").removeClass('bgwhite');
    }
  }); 
  $('.navbar li').hover(function () {
    $(this).find('.dropdown-menu').stop(true, true).delay(200).fadeIn();
  },

  function () {
    $(this).find('.dropdown-menu').stop(true, true).delay(200).fadeOut();
  });
  $(window).scroll(function(){
    if($(document).scrollTop() >550){
      $(".contenu_spec1").addClass('base');
    }
  });
  $(window).scroll(function(){
    if($(document).scrollTop() >700){
      $("#contenu_specialite_suite").addClass('show');
    }
  });
  $(document).ready(function(){
   $(".navbar-default").removeClass("active");
 });
  $(window).scroll(function(){
    // console.log($(document).scrollTop());
    if($(document).scrollTop() >813) {
      $("#element-animated").addClass('show');
      
    }else{
      $("#element-animated").removeClass('show');

    }
  });
  $(window).scroll(function (event) {
        var sc = $(window).scrollTop();
        if(sc==1500){
          $('marg').addClass('a');
        }else{
          $('marg').removeClass('a');
        }
    });

  //suppression class active au passage du curseur
  $('#top_menu > li.active').hover(function(){
    $(this).removeClass('active');
    });

  //suppression class active au clic d'un menu
  $('.dropdown-menu > li').each(function(){
    $(this).removeClass('active');
    });

  //clic spécialité
  $('.to-click').on('click', function(e){
      var link = $(this).attr('name'); 
      link = document.location.origin + '/page/' + link;
      window.location.href = link;
    });

  //clic footer facebook
  $('#facebook-link').each(function(){
      var url = window.location.href; 
      var res = url.split('/');
      if (res[res.length-1] == 'recrutement'){
        var new_url = "https://www.facebook.com/ingenosya.recrutement.3";
        $(this).attr("href", new_url);
      }
    });
  
});

/* Equal Height Columns */
/*function setNewsHeight1(){
	var i = 0;
	var prevDiv = null;
	$('.element-border').each(function(){
		if(i % 2 == 1){
			var h1 = prevDiv.height();
			var h2 = $(this).height();
			if(h1 > h2){
				$(this).height(h1);
			}
			else{
				prevDiv.height(h2);
			}
		}
		prevDiv = $(this);
		i++;
	});
}

$(window).load(function() {
	setNewsHeight1();
});*/

function getMaxOfArray(list_height) {
  return Math.max.apply(null, list_height);
}

function setNewsHeight2(element){
  width = $(document).width();
  if (width >= 768) {
    var i = 0;
    var list_height = [];
    $(element).each(function() {
      list_height[i] = $(this).height();
      i++; 
      });
    var max_height = getMaxOfArray(list_height);
    $(element).each(function() {
      $(this).height(max_height);
      });
  }
}

$(window).load(function() {
  setNewsHeight2('.element-border');
  setNewsHeight2('.element-recruitment');
  //setNewsHeight2('.to-click');
});

window.onorientationchange = function() {
  //var portraitOrientation = window.matchMedia("(orientation:portrait)"); /*Get orientation*/
  var url = window.location.href; 
  var res = url.split('/');
  var current_page = res[res.length-1];
  var pages = ['a-qui-s-adresse-t-on', 'rejoignez-nous', 'recrutement'];
  if (pages.includes(current_page) ){
    window.location.reload(true);
  }
}