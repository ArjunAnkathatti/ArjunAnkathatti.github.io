 /* Animations on Scroll */
 $('.js--heaxagon-wp').waypoint(function(direction){
    $('.js--heaxagon-wp').addClass('animated flip');
 },{
    offset: '50%'
 });

 $('.js--heaxagon-wp').waypoint(function(direction){
    $('.js--userimage-wp').addClass('animated bounceInLeft');
    $('.js--proficiency-wp').addClass('animated bounceInRight');
 },{
    offset: '20%'
 });

 $('.js--projects-wp').waypoint(function(direction){
    $('.js--projects-wp').addClass('animated rubberBand');
 }, {
     offset: '30%'
 });

 $('.js--publications-wp').waypoint(function(direction){
    $('.js--publications-wp').addClass('animated rubberBand');
 }, {
     offset: '30%'
 });