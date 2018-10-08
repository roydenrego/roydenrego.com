/* global $ */
/* global WOW */
/* global swal */
/*-------------------------------------------------------------------------------
  PRE LOADER
-------------------------------------------------------------------------------*/

var site_url = "https://personal-webite-roydenrego.c9users.io"; 

$(window).load(function() {
  $('.preloader').fadeOut(1000); // set duration in brackets    
});



/* HTML document is loaded. DOM is ready. 
-------------------------------------------*/

$(document).ready(function() {


  /*-------------------------------------------------------------------------------
    Navigation - Hide mobile menu after clicking on a link
  -------------------------------------------------------------------------------*/

  $('.navbar-collapse a').click(function() {
    $(".navbar-collapse").collapse('hide');
  });


  $(window).scroll(function() {
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

  $(function() {
    $('.custom-navbar a, #home a').bind('click', function(event) {
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


  $("#contactForm").on('submit', function(e) {
    e.preventDefault();
    
    let submit_url = site_url + "/submit"
    $.ajax({
      url: submit_url,
      type: "POST",
      cache: false,
      data: $("#contactForm").serialize(),
      success: function(data){
        $("#contactForm").trigger('reset')

        swal(
          'Sent',
          'Your message has been sent successfully. I will reach out to you very soon.',
          'success'
        );
      }
    });
  });
  
  
});
