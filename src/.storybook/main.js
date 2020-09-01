module.exports = {
    stories: ['../src/**/*.stories.js'],
    addons: [
      '@storybook/preset-create-react-app',
      '@storybook/addon-actions',
      '@storybook/addon-links',
      '@storybook/addon-docs',
      '@storybook/addon-knobs',
      '@storybook/addon-viewport',
      '@storybook/addon-a11y'
    ],
    
  };
  module.exports = {
    babel: async (babelConfig) => {
      // do anything with the babel config for preview
      return babelConfig;
    },
  };