$(document).ready(function(){
    $('.customer-logos').slick({
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 700,
    arrows: false,
    dots: false,
    pauseOnHover: false,
    responsive: [{
      breakpoint: 768,
      settings: {
        slidesToShow: 3
      }
    }, {
      breakpoint: 520,
      settings: {
        slidesToShow: 2
      }
    }]
    });
  });


    // :: 4.0 Sliders Active Code
    if ($.fn.owlCarousel) {
      var welcomeSlide = $('.hero-post-slides');
      var testiSlides = $('.testimonials-slides');
      var portfolioSlides = $('.portfolio-slides');

      welcomeSlide.owlCarousel({
          items: 1,
          margin: 0,
          loop: true,
          nav: false,
          dots: false,
          autoplay: true,
          center: true,
          autoplayTimeout: 5000,
          smartSpeed: 1000
      });

      testiSlides.owlCarousel({
          items: 1,
          margin: 0,
          loop: true,
          nav: false,
          dots: true,
          autoplay: true,
          autoplayTimeout: 5000,
          smartSpeed: 700,
          animateIn: 'fadeIn',
          animateOut: 'fadeOut'
      });

      portfolioSlides.owlCarousel({
          items: 2,
          margin: 30,
          loop: true,
          nav: true,
          navText: ['<i class="fa fa-angle-left"></i>', '<i class="fa fa-angle-right"></i>'],
          dots: true,
          autoplay: false,
          autoplayTimeout: 5000,
          smartSpeed: 700,
          center: true
      });
  }
  if ($.fn.classyNav) {
    $('#logisticNav').classyNav();
}

