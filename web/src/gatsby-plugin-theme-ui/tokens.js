const breakpoints = [
  "400px",
  "550px",
  "750px",
  "1000px",
  "1200px",
  "1600px",
  "1900px",
];

breakpoints.xs = breakpoints[0];
breakpoints.sm = breakpoints[1];
breakpoints.md = breakpoints[2];
breakpoints.lg = breakpoints[3];
breakpoints.xl = breakpoints[4];
breakpoints.xxl = breakpoints[5];
breakpoints.xxxl = breakpoints[6];

export { breakpoints };

const mediaQueries = {};

for (const breakpoint in breakpoints) {
  mediaQueries[breakpoint] = `@media (min-width: ${breakpoints[breakpoint]})`;
}

export { mediaQueries };

export const constants = {
  headerHeight: "64px",
  footerHeight: "300px",
};

export const colors = {
  white: "#fff",
  black: "#0A0A0A",
  accent: "#DBEDF3",
  danger: "#C53030",
  mute: "hsla(0, 0%, 13%, 0.2)",
  iceberg: "#DBEDF3",
  paragraphColor: "#0A0A0A",
  lightGray: "#F2F2F2",
  shadowGreen: "hsla(172, 23%, 69%, 0.2)",
  grey: "#d2d2d2",
  primary: "#FFC001",
  darkGrey: "hsla(0, 0%, 13%, 0.6)",
  modes: {
    dark: {
      background: "#0A0A0A",
      mute: "hsla(0, 0%, 87%, 0.2)",
      paragraphColor: "hsla(0, 0%, 100%, 0.8)",
      lightGray: "#2b2626",
      grey: "#2b2626",
      primary: "#FFC001",
    },
  },
};