"use strict";

var path = require('path');

module.exports = {
  sassOptions: {
    includePaths: [path.join(__dirname, 'styles')]
  }
};

var withImages = require("next-images");

module.exports = withImages();
var exposedConfigs = withImages({
  trailingSlash: true,
  cssModule: true,
  i18n: {
    locales: ['en-US', 'ru'],
    defaultLocale: 'en-US'
  }
});
var configuration = Object.assign(exposedConfigs);
module.exports = configuration;