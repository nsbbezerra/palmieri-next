import UncontrolledCarousel from "reactstrap/lib/UncontrolledCarousel";

export default function Banner() {
  const items = [
    {
      src: "/img/banner-three-web.png",
      altText: "Slide 3",
      key: "1",
      caption: "",
    },
    {
      src: "/img/banner-two-web.png",
      altText: "Slide 2",
      key: "2",
      caption: "",
    },
    {
      src: "/img/banner-four-web.png",
      altText: "Slide 3",
      key: "3",
      caption: "",
    },
  ];

  return <UncontrolledCarousel items={items} style={{ zIndex: 100 }} />;
}
