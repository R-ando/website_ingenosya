$(document).ready(function(){
    $(window).scroll(function () {
        if ($(document).scrollTop() > 180) {
            $(".navbar-default").addClass('bgwhite');
        } else {
            $(".navbar-default").removeClass('bgwhite');
        }
    });
    $(window).scroll(function () {
        if ($(document).scrollTop() > 550) {
            $(".contenu_spec1").addClass('base');
        }
    });
    $(window).scroll(function () {
        if ($(document).scrollTop() > 700) {
            $("#contenu_specialite_suite").addClass('show');
        }
    });
    $(window).scroll(function () {
        // console.log($(document).scrollTop());
        if ($(document).scrollTop() > 813) {
            $("#element-animated").addClass('show');

        } else {
            $("#element-animated").removeClass('show');

        }
    });

    $(window).scroll(function (event) {
        var sc = $(window).scrollTop();
        if (sc == 1500) {
            $('marg').addClass('a');
        } else {
            $('marg').removeClass('a');
        }
    });
})