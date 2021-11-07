$(document).ready(function(){
 /*--------------Navbar shrink----------*/
 $(window).on("scroll",function(){
  if($(this).scrolltop()>90){
      $(".navbar").addClass("navbar-shrink");
  }  
  else{
      $(".navbar").removeClass("navbar-shrink");
  } 
 });

 /*-------------------Features Carousel-----------*/
 $('.owl-carousel').owlCarousel({
    loop:true,
    margin:0,
    autoplay:true,
    responsiveClass:true,
    responsive:{
        0:{
            items:1,
            
        },
        600:{
            items:2,
            
        },
        1000:{
            items:3,
       
        }
    }
})
$.scrollIt({
    topOffset: -50
});
});