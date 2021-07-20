const path = require("path");

module.exports = {
  stories: [
    "../components/**/**/*.stories.mdx",
    "../components/**/**/*.stories.@(js|jsx|ts|tsx)",
  ],
  addons: [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "storybook-addon-styled-component-theme/dist/preset",
  ],
  webpackFinal: async (config) => {
    config.resolve.modules = [
      ...(config.resolve.modules || []),
      path.resolve(__dirname, "../"),
    ];

    return config;
  },
};
