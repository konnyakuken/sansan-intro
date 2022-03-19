$(function() {
    $(".slider").slick({
      dots: true,
      infinite: true,
      slidesToShow: 4,
      slidesToScroll: 1,
      responsive: [
        {
          breakpoint: 768,
          settings: {
            dots: true,
            infinite: true,
            slidesToShow: 1,
            slidesToScroll: 1
          }
        }
      ]
    });
  });

  