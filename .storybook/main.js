module.exports = {
  "stories": [
    "../packages/colors/**/*.stories.js",
    "../packages/colorpairs/**/*.stories.js"
  ],
  "addons": [
    "@storybook/addon-links",
    "@storybook/addon-essentials"
  ],
  presets: ['storybook-addon-deps/preset-explorer']
}