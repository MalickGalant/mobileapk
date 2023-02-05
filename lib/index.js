'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _google = require('./google');

var _google2 = _interopRequireDefault(_google);

var _black = require('./black');

var _black2 = _interopRequireDefault(_black);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var AdSense = {
  Google: _google2.default,
  Black: _black2.default
};

exports.default = AdSense;
