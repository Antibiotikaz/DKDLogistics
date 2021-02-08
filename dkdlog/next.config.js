const path = require('path')

module.exports = {
  sassOptions: {
    includePaths: [path.join(__dirname, 'styles')],
  },

}

const withImages = require("next-images");
module.exports = withImages(
);
      const exposedConfigs = withImages({
        trailingSlash: true,
        cssModule: true,
        i18n: {
          locales: ['en-US', 'ru'],
          defaultLocale: 'en-US',
        },
      });
      const configuration = Object.assign(exposedConfigs);
      module.exports = configuration;

    