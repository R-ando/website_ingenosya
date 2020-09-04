$(document).ready(function(){
  $(".navbar-default").addClass('fixed');
 
  $('.navbar li').hover(function () {
    $(this).find('.dropdown-menu').stop(true, true).delay(200).fadeIn();
  },

  function () {
    $(this).find('.dropdown-menu').stop(true, true).delay(200).fadeOut();
  });
  
  
  $(document).ready(function(){
   $(".navbar-default").removeClass("active");
 });

  //suppression class active au passage du curseur
  $('#top_menu > li.active').hover(function(){
    $(this).removeClass('active');
    });

  //suppression class active au clic d'un menu
  $('.dropdown-menu > li').each(function(){
    $(this).removeClass('active');
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

