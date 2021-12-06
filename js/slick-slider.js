
$('.regular').slick({
        autoplay: true,
       autoplaySpeed: 3000,
       dots: true,
        infinite: true,
        speed: 1500,
        slidesToShow: 3,
        slidesToScroll: 3,
        responsive: [
          {
            breakpoint: 991,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 1
            }
          },
          {
            breakpoint: 767,
             
            settings: {
              slidesToShow: 1,
                 dots: false,
              slidesToScroll: 1
                
            }
          }
        ]
      });