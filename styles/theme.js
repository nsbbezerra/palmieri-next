import { theme, extendTheme } from "@chakra-ui/react";

const customTheme = extendTheme({
  ...theme,
  breakpoints: ["320px", "568px", "768px", "834px", "1024px", "1380px"],
  fonts: {
    body: "Noto Sans JP, system-ui, sans-serif",
    heading: "Berlin Sans FB Demi, sans-serif",
    mono: "Menlo, monospaced",
  },
  fontWeights: {
    ...theme.fontWeights,
    normal: 400,
    medium: 500,
    bold: 700,
  },
  radii: {
    ...theme.radii,
    sm: "0px",
    md: "2px",
    lg: "4px",
  },
  colors: {
    ...theme.colors,
  },
});

export default customTheme;
