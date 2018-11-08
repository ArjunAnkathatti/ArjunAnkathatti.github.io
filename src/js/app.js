$(document).ready(function() {

  $('.js--mobile-nav').slideToggle();

  $('.mobile-nav li a').click(function() {
    $('.js--mobile-nav').slideToggle();    
  });

   $('.js--nav-icon').click(function() {
     var nav = $('.js--mobile-nav');
     nav.slideToggle(200);
   });


  $('.js--section-about').waypoint(function(direction) {
    if (direction == "down") {
      $('nav').addClass('sticky');
    } else {
      $('nav').removeClass('sticky');
    }
    $('.js--link-about').addClass('active');
    $('.js--link-projects').removeClass('active');
    $('.js--link-publications').removeClass('active');
  }, {
      offset: '60px'
  });

  $('.js--section-projects').waypoint(function(direction) {
    $('.js--link-projects').addClass('active');
    $('.js--link-about').removeClass('active');
    $('.js--link-publications').removeClass('active');
  }, {
      offset: '60px'
  });

  $('.js--section-publications').waypoint(function(direction) {
    if (direction == "down") {
      $('.js--link-publications').addClass('active');
      $('.js--link-about').removeClass('active');
      $('.js--link-projects').removeClass('active');
    }
  }, {
      offset: '80%'
  });

  $('.js--section-publications').waypoint(function(direction) {
    if (direction == "up") {
      $('.js--link-projects').addClass('active');
      $('.js--link-about').removeClass('active');
      $('.js--link-publications').removeClass('active');
    }
  }, {
      offset: '70%'
  });

  //  $('.js--project-01').waypoint(function(direction) {
  //   if (direction == "down") {
  //     $('.js--image-right-01').addClass('animated fadeInRightBig');
  //     $('.js--content-left-01').addClass('animated fadeInLeftBig');
  //     $('.js--project-title-01').addClass('animated fadeInDownBig');
  //   }
  // }, {
  //     offset: '80%'
  // });

  //  $('.js--project-02').waypoint(function(direction) {
  //   if (direction == "down") {
  //     $('.js--image-left-02').addClass('animated fadeInLeftBig');
  //     $('.js--content-right-02').addClass('animated fadeInRightBig');
  //     $('.js--project-title-02').addClass('animated fadeInDownBig');
  //   }
  // }, {
  //     offset: '80%'
  // });


  //  $('.js--project-03').waypoint(function(direction) {
  //   if (direction == "down") {
  //     $('.js--image-right-03').addClass('animated fadeInRightBig');
  //     $('.js--content-left-03').addClass('animated fadeInLeftBig');
  //     $('.js--project-title-03').addClass('animated fadeInDownBig');
  //   }
  // }, {
  //     offset: '80%'
  // });

  //  $('.js--project-04').waypoint(function(direction) {
  //   if (direction == "down") {
  //     $('.js--image-left-04').addClass('animated fadeInLeftBig');
  //     $('.js--content-right-04').addClass('animated fadeInRightBig');
  //     $('.js--project-title-04').addClass('animated fadeInDownBig');
  //   }
  // }, {
  //     offset: '80%'
  // });

  //  $('.js--project-05').waypoint(function(direction) {
  //   if (direction == "down") {
  //     $('.js--image-right-05').addClass('animated fadeInRightBig');
  //     $('.js--content-left-05').addClass('animated fadeInLeftBig');
  //     $('.js--project-title-05').addClass('animated fadeInDownBig');
  //   }
  // }, {
  //     offset: '80%'
  // });

  //  $('.js--project-06').waypoint(function(direction) {
  //   if (direction == "down") {
  //     $('.js--image-left-06').addClass('animated fadeInLeftBig');
  //     $('.js--content-right-06').addClass('animated fadeInRightBig');
  //     $('.js--project-title-06').addClass('animated fadeInDownBig');
  //   }
  // }, {
  //     offset: '90%'
  // });



  /* sweetScroll load */
  const sweetScroll = new SweetScroll({/* some options */});

  /* particlesJS.load(@dom-id, @path-json, @callback (optional)); */
  particlesJS('particles-js', {
    "particles": {
      "number": {
        "value": 30,
        "density": {
          "enable": true,
          "value_area": 800
        }
      },
      "color": {
        "value": "#888"
        // "value": "#E31B6D"
      },
      "shape": {
        "type": "polygon",
        "stroke": {
          "width": 0,
          "color": "#000000"
        },
        "polygon": {
          "nb_sides": 5
        },
        "image": {
          "src": "img/github.svg",
          "width": 100,
          "height": 100
        }
      },
      "opacity": {
        "value": 0.5,
        "random": false,
        "anim": {
          "enable": false,
          "speed": 1,
          "opacity_min": 0.1,
          "sync": false
        }
      },
      "size": {
        "value": 3,
        "random": true,
        "anim": {
          "enable": false,
          "speed": 19.18081918081918,
          "size_min": 0.1,
          "sync": false
        }
      },
      "line_linked": {
        "enable": true,
        "distance": 150,
        "color": "#ffffff",
        "opacity": 0.4,
        "width": 1
      },
      "move": {
        "enable": true,
        "speed": 4,
        "direction": "none",
        "random": true,
        "straight": false,
        "out_mode": "out",
        "bounce": false,
        "attract": {
          "enable": false,
          "rotateX": 600,
          "rotateY": 1200
        }
      },
      nb: 80
    },
    "interactivity": {
      "detect_on": "window",
      "events": {
        "onhover": {
          "enable": false,
          "mode": "grab"
        },
        "onclick": {
          "enable": true,
          "mode": "push"
        },
        "resize": true
      },
      "modes": {
        "grab": {
          "distance": 400,
          "line_linked": {
            "opacity": 1
          }
        },
        "bubble": {
          "distance": 400,
          "size": 40,
          "duration": 2,
          "opacity": 8,
          "speed": 3
        },
        "repulse": {
          "distance": 200,
          "duration": 0.4
        },
        "push": {
          "particles_nb": 4
        },
        "remove": {
          "particles_nb": 2
        }
      }
    },
    "retina_detect": true
  });

});
