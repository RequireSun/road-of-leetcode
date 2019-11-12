'use strict';

const path = require('path');

/** @type Egg.EggPlugin */
module.exports = {
  // had enabled by egg
  // static: {
  //   enable: true,
  // }
  ['header-injector']: {
    enable: true,
    path: path.join(__dirname, '../lib/plugin/header-injector'),
  }
};
