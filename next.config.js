const withImages = require("next-images");
const withSass = require("@zeit/next-sass");
const path = require("path");

module.exports = withImages(
  withSass({
    cssModules: true,
  })
);
