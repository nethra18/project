"use strict";

var ajaxWithCallback = function ajaxWithCallback(success, fail) {
  setTimeout(function () {
    return success('call finished');
  }, 2000), setTimeout(function () {
    return fail('cal failed');
  }, 4000);
};

ajaxWithCallback(function (data) {
  return console.log('success', data);
}, function (err) {
  return console.log('error', err);
});
