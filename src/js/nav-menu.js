$(document).ready(function() {
    /* ******************************************************
  /* Header and Navigation
  /* ******************************************************
  /* mobile navigation toggle slide */
  $('.js--mobile-nav').slideToggle();

  $('.mobile-nav li a').click(function() {
    $('.js--mobile-nav').slideToggle();    
  });

   $('.js--nav-icon').click(function() {
     var nav = $('.js--mobile-nav');
     nav.slideToggle(200);
   });

  /* sticky navigation and highlight navigation item based on location on the page
  /* highlight nav menu item based on the location on the page
  */
  $('.js--section-about').waypoint(function(direction) {
    if (direction == "down") {
      $('nav').addClass('sticky');
    } else {
      $('nav').removeClass('sticky');
    }
    $('.js--link-about').addClass('active');
    $('.js--link-projects').removeClass('active');
    $('.js--link-publications').removeClass('active');
    $('.js--link-contact').removeClass('active');

    /* code to animate the Skill Bars load */ 
    $('.skillbar').each(function(){
      $(this).find('.skillbar-bar').animate({
        width:$(this).attr('data-percent')
      },4000);
    });
  }, {
      offset: '60px'
  });

  /*
  /* Scrolling down the page - modify the nav bar menu active item 
  */
  $('.js--section-projects').waypoint(function(direction) {
    $('.js--link-projects').addClass('active');
    $('.js--link-about').removeClass('active');
    $('.js--link-publications').removeClass('active');
    $('.js--link-contact').removeClass('active');
  }, {
      offset: '60px'
  });

  $('.js--section-publications').waypoint(function(direction) {
    if (direction == "down") {
      $('.js--link-publications').addClass('active');
      $('.js--link-about').removeClass('active');
      $('.js--link-projects').removeClass('active');
      $('.js--link-contact').removeClass('active');
    }
  }, {
      offset: '80%'
  });

  $('.js--section-contact').waypoint(function(direction) {
    if (direction == "down") {
      $('.js--link-contact').addClass('active');
      $('.js--link-about').removeClass('active');
      $('.js--link-projects').removeClass('active');
      $('.js--link-publications').removeClass('active');
    }
  }, {
      offset: '60%'
  });


  /*
  /* Scrolling up the page - modify the nav bar menu active item 
  */
  $('.js--section-contact').waypoint(function(direction) {
    if (direction == "up") {
      $('.js--link-projects').removeClass('active');
      $('.js--link-about').removeClass('active');
      $('.js--link-publications').addClass('active');
      $('.js--link-contact').removeClass('active');
    }
  }, {
      offset: '30%'
  });

  $('.js--section-publications').waypoint(function(direction) {
    if (direction == "up") {
      $('.js--link-projects').addClass('active');
      $('.js--link-about').removeClass('active');
      $('.js--link-publications').removeClass('active');
      $('.js--link-contact').removeClass('active');
    }
  }, {
      offset: '70%'
  });

  $('.js--section-projects').waypoint(function(direction) {
    if (direction == "up") {
      $('.js--link-projects').removeClass('active');
      $('.js--link-about').addClass('active');
      $('.js--link-publications').removeClass('active');
      $('.js--link-contact').removeClass('active');
    }
  }, {
      offset: '70%'
  });
});