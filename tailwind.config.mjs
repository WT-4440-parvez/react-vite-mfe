import path from 'path';

export default {
  content: [
    path.resolve(__dirname, 'apps/**/*.{html,js,ts,jsx,tsx}'),
    path.resolve(__dirname, 'apps/**/src/**/*.{html,js,ts,jsx,tsx}'),
  ],
  theme: {
    extend: {
      colors: {
        sgx: {
          white: "#FFFFFF",
          blue: "#0B2368",
          green: "#A4DD36",

          yellow: "#FFCC00",
          lightBlue: "#0094B3",
          red: "#BF0052",
          purple: "#7F1E75",
          darkGrey: "#5F6062",
          lightGrey: "#9C9E9F",

          bg: {
            blue: "#E4EFFF",
            green: "#F6F9DE",
            grey: "#F2F2F2",
            lightBlue: "#D8E2F9",
          }
        }
      },
      spacing: {
        128: "32rem",
        144: "36rem",
      },
    },
  },
  plugins: [],
};
