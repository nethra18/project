"use strict";

var ajaxwithCallback = function ajaxwithCallback(success, fail) {
  return new Promise(function (resolve, reject) {
    setTimeout(function () {
      return success('call finished');
    }, 5000);
    setTimeout(function () {
      return fail('call failed');
    }, 4000);
  });
  ajaxwithCallback().then(function (data) {
    return console.log('success', data);
  }).catch(function (err) {
    return console.log('error', err);
  });
};
