"use strict";

function sum() {
  for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
    args[_key] = arguments[_key];
  }

  return args.filter(function (e) {
    return typeof e === 'number';
  }).reduce(function (prev, curr) {
    return prev + curr;
  });
}
