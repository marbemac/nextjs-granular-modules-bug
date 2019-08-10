const withCss = require('@zeit/next-css');

const config = withCss({
  experimental: {
    granularChunks: true,
  },
});

module.exports = config;
