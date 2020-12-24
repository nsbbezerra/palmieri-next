const settings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 3,
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
        arrows: false,
      },
    },
    {
      breakpoint: 1085,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3,
        centerPadding: "80px",
      },
    },
    {
      breakpoint: 1033,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2,
        centerPadding: "150px",
      },
    },
    {
      breakpoint: 992,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2,
        centerPadding: "150px",
      },
    },
    {
      breakpoint: 929,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2,
        centerPadding: "130px",
      },
    },
    {
      breakpoint: 832,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2,
        centerPadding: "80px",
      },
    },
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2,
        centerPadding: "65px",
      },
    },
    {
      breakpoint: 693,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        centerPadding: "150px",
      },
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        centerPadding: "110px",
      },
    },
    {
      breakpoint: 515,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        centerPadding: "80px",
      },
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        centerPadding: "60px",
      },
    },
    {
      breakpoint: 397,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        centerPadding: "35px",
      },
    },
    {
      breakpoint: 359,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        centerPadding: "25px",
      },
    },
    {
      breakpoint: 355,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        centerPadding: "17px",
        dots: false,
      },
    },
  ],
};
export default settings;
