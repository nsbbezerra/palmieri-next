const config = {
  carousel: {
    desktop: {
      breakpoint: {
        max: 3000,
        min: 1100,
      },
      items: 5,
      partialVisibilityGutter: 60,
    },
    mobile: {
      breakpoint: {
        max: 650,
        min: 320,
      },
      items: 1,
      slidesToSlide: 1,
      partialVisibilityGutter: 5,
    },
    tablet: {
      breakpoint: {
        max: 1100,
        min: 650,
      },
      items: 3,
      partialVisibilityGutter: 30,
    },
  },
  depoiments: {
    desktop: {
      breakpoint: {
        max: 3000,
        min: 1085,
      },
      items: 3,
      slidesToSlide: 3,
      partialVisibilityGutter: 300,
    },
    mobile: {
      breakpoint: {
        max: 650,
        min: 0,
      },
      items: 1,
      slidesToSlide: 1,
      partialVisibilityGutter: 60,
    },
    tablet: {
      breakpoint: {
        max: 1085,
        min: 650,
      },
      items: 2,
      slidesToSlide: 2,
      partialVisibilityGutter: 60,
    },
  },

  general: {
    bitrix:
      "https://palmieriuniformes.bitrix24.com.br/rest/1/0umu0cwegmu7d07h/",
    message: "Olá Palmieri Uniformes, vim pelo site",
    phone: "5563985014015",
    urlApi: "http://localhost:21489",
    //urlApi: "http://palmieriuniformes.nodejs7602.kinghost.net:21489",
  },
};
export default config;
