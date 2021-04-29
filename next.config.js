/* eslint-disable @typescript-eslint/no-var-requires */
const withImages = require('next-images');
const withLinaria = require('next-linaria');
const withPlugins = require('next-compose-plugins');

module.exports = withPlugins([withLinaria, withImages]);
