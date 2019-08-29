/* global $ */
/* global WOW */
/* global swal */
/*-------------------------------------------------------------------------------
  PRE LOADER
-------------------------------------------------------------------------------*/

var site_url = "https://roydenrego.com";

$(window).load(function () {
  $('.preloader').fadeOut(1000); // set duration in brackets    
});



/* HTML document is loaded. DOM is ready. 
-------------------------------------------*/

$(document).ready(function () {


  /*-------------------------------------------------------------------------------
    Navigation - Hide mobile menu after clicking on a link
  -------------------------------------------------------------------------------*/

  $('.navbar-collapse a').click(function () {
    $(".navbar-collapse").collapse('hide');
  });


  $(window).scroll(function () {
    if ($(".navbar").offset().top > 50) {
      $(".navbar-fixed-top").addClass("top-nav-collapse");
    }
    else {
      $(".navbar-fixed-top").removeClass("top-nav-collapse");
    }
  });



  /*-------------------------------------------------------------------------------
    jQuery Parallax
  -------------------------------------------------------------------------------*/

  function initParallax() {
    $('#home').parallax("100%", 0.1);
    $('#about').parallax("100%", 0.3);
    $('#service').parallax("100%", 0.2);
    $('#experience').parallax("100%", 0.3);
    $('#education').parallax("100%", 0.1);
    $('#portfolio').parallax("100%", 0.3)
    $('#quotes').parallax("100%", 0.1);
    $('#contact').parallax("100%", 0.3);
    $('footer').parallax("100%", 0.2);

  }
  initParallax();



  /*-------------------------------------------------------------------------------
    smoothScroll js
  -------------------------------------------------------------------------------*/

  $(function () {
    $('.custom-navbar a, #home a').bind('click', function (event) {
      var $anchor = $(this);
      $('html, body').stop().animate({
        scrollTop: $($anchor.attr('href')).offset().top - 49
      }, 1000);
      event.preventDefault();
    });
  });



  /*-------------------------------------------------------------------------------
    wow js - Animation js
  -------------------------------------------------------------------------------*/

  new WOW({ mobile: false }).init();

  //Preload the project contents
  // $(".portfolio-container").ready(function() {
  //   $('.portfolio-container > div').each(function(index) {
  //     var obj = JSON.parse($(this).attr('data-json'));
  //     $('<div></div>').html(obj.content);
  //   });
  // });

  //Contact Form Submit

  $("#contactForm").on('submit', function (e) {
    e.preventDefault();

    $("#submit").prop('disabled', true);
    $("#submit").addClass('grc-disabled');

    $.ajax({
      url: '/submit',
      type: "POST",
      cache: false,
      data: $("#contactForm").serialize(),
      success: function (data) {

        $("#submit").prop('disabled', false);
        $("#submit").removeClass('grc-disabled');

        if (data.statuscode == 200) {
          $("#contactForm").trigger('reset');

          swal(
            'Sent',
            'Your message has been sent successfully. I will reach out to you very soon.',
            'success'
          );
        }
        else {
          swal(
            'Error',
            data.status,
            'error'
          );
        }
      }
    });
  });

  //Content Filter

  $('input:radio[name="project_type"]').change(
    function () {
      if (this.checked) {
        var type = $(this).attr('id');


        $(".card").removeClass('card-disappear');

        if (type == "mobile") {
          $(".web-design").addClass('card-disappear');
          $(".workshop").addClass('card-disappear');
        }
        else if (type == "web") {
          $(".mobile-app").addClass('card-disappear');
          $(".workshop").addClass('card-disappear');
        }
        else if (type == "workshop") {
          $(".mobile-app").addClass('card-disappear');
          $(".web-design").addClass('card-disappear');
        }
      }
    });

  //Loading the Portfolio Popup
  $('.card .content a').on('click', function (e) {
    var id = $(this).attr('data-id');
    var data = JSON.parse($('#card-' + id).attr('data-json'));

    $("#port-title").text(data.title);
    $("#popup-article .content")[0].innerHTML = data.content;
    $(".popup__close").attr('href', '#card-' + id);
  });
});


function recaptchaCallback() {
  $("#submit").prop('disabled', false);
  $("#submit").removeClass('grc-disabled');
}