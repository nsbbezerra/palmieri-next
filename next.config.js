module.exports = {
  images: {
    deviceSizes: [640, 750, 828, 1080, 1200, 1380, 1920, 2048, 3840],
    domains: [
      "i.pinimg.com",
      "w3uniformes.com.br",
      "localhost",
      "palmieriuniformes.nodejs7602.kinghost.net",
    ],
  },
  async redirects() {
    return [
      {
        source: "/comofunciona",
        destination: "/",
        permanent: true,
      },
      {
        source: "/quemsomos",
        destination: "/",
        permanent: true,
      },
      {
        source: "/contato",
        destination: "/",
        permanent: true,
      },
      {
        source: "/catalogo/:item",
        destination: "/",
        permanent: true,
      },
      {
        source: "/produtos/:produto",
        destination: "/",
        permanent: true,
      },
    ];
  },
};
