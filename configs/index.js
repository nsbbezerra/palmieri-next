const config = {
  carousel: {
    desktop: {
      breakpoint: {
        max: 3000,
        min: 1024,
      },
      items: 4,
      partialVisibilityGutter: 60,
    },
    mobile: {
      breakpoint: {
        max: 464,
        min: 0,
      },
      items: 1,
      partialVisibilityGutter: 30,
    },
    tablet: {
      breakpoint: {
        max: 1024,
        min: 464,
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
      partialVisibilityGutter: 60,
    },
    mobile: {
      breakpoint: {
        max: 835,
        min: 0,
      },
      items: 1,
      partialVisibilityGutter: 30,
    },
    tablet: {
      breakpoint: {
        max: 1085,
        min: 835,
      },
      items: 2,
      partialVisibilityGutter: 30,
    },
  },
};
export default config;
