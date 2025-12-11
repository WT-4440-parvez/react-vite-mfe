const path = require('path');

module.exports = {
  content: [
    path.resolve(__dirname, 'apps/**/*.{html,js,ts,jsx,tsx}'),
    path.resolve(__dirname, 'apps/**/src/**/*.{html,js,ts,jsx,tsx}'),
  ],
  theme: {
    extend: {},
  },
  plugins: [],
};
