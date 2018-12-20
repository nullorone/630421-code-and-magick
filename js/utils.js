'use strict';
(function () {
  // Находим случайное число в указанных диапазонах
  var getRandomInt = function (min, max) {
    var randomInteger = Math.floor(Math.random() * (max - min) + min);
    return randomInteger;
  };

  var isKeydownEvent = function (evt, keycode) {
    return evt.keyCode === keycode;
  };

  window.utils = {
    getRandomInteger: getRandomInt,
    keydownEvent: isKeydownEvent
  };
})();
