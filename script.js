document.addEventListener('DOMContentLoaded', function() {
    $(".multiple-items").slick({
        dots: true,
        infinite: false,
        arrows: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        responsive:[
              {
                breakpoint: 480,
                settings: {
                  slidesToShow: 1,
                  slidesToScroll: 1
                }
              },
              {
                breakpoint: 800,
                settings: {
                  slidesToShow: 2,
                  slidesToScroll: 1
                }
              }
        ]
      });
  }, false);