'use strict';

const path = require('path');

module.exports = app => {
  const config = {};
  config.keys = 'v-demo-egg-test'
  config.static = {
    prefix: '/',
    dir: path.join(__dirname, '../dist/client'),
  };
  return config
}