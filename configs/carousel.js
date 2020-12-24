const settings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 4,
  centerMode: true,
  centerPadding: "130px",
  responsive: [
    {
      breakpoint: 1280,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3,
        infinite: true,
        dots: true,
      },
    },
    {
      breakpoint: 992,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3,
        infinite: true,
        dots: true,
      },
    },
    {
      breakpoint: 929,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3,
        centerPadding: "80px",
      },
    },
    {
      breakpoint: 832,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2,
        infinite: true,
        dots: true,
      },
    },
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2,
        centerPadding: "100px",
      },
    },
    {
      breakpoint: 655,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        centerPadding: "180px",
      },
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        centerPadding: "140px",
      },
    },
    {
      breakpoint: 515,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        centerPadding: "100px",
      },
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        centerPadding: "80px",
      },
    },
    {
      breakpoint: 397,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        centerPadding: "60px",
      },
    },
    {
      breakpoint: 355,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        centerPadding: "45px",
        dots: false,
      },
    },
  ],
};
export default settings;
