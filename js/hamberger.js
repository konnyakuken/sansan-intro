$(function() {
  $('.hamburger').click(function() {
      $(this).toggleClass('active');

      if ($(this).hasClass('active')) {
          $('.globalMenuSp').addClass('active');
      } else {
          $('.globalMenuSp').removeClass('active');
      }
  });

  $("a").click(function(){
    $('.globalMenuSp').removeClass('active');
    $('.hamburger').removeClass('active');
  });
  
});