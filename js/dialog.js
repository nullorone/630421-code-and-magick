'use strict';

var userAvatar = document.querySelector('.upload');
var setupContainer = document.querySelector('.setup');

var onUserAvatarMousedown = function (evt) {
  evt.preventDefault();

  var defaultPosition = {
    x: evt.clientX,
    y: evt.clientY
  };

  var dragged = false;

  var onUserAvatarMousemove = function (mousemoveEvt) {
    mousemoveEvt.preventDefault();
    dragged = true;
    var newPosition = {
      x: mousemoveEvt.clientX - defaultPosition.x,
      y: mousemoveEvt.clientY - defaultPosition.y
    };

    defaultPosition = {
      x: mousemoveEvt.clientX,
      y: mousemoveEvt.clientY
    };

    setupContainer.style.top = (setupContainer.offsetTop + newPosition.y) + 'px';
    setupContainer.style.left = (setupContainer.offsetLeft + newPosition.x) + 'px';

  };

  var onUserAvatarMouseup = function (mouseupEvt) {
    mouseupEvt.preventDefault();
    document.removeEventListener('mousemove', onUserAvatarMousemove);
    document.removeEventListener('mouseup', onUserAvatarMouseup);

    if (dragged) {
      var onUserAvatarPreventDefault = function (preventEvt) {
        preventEvt.preventDefault();
        userAvatar.removeEventListener('click', onUserAvatarPreventDefault);
      };
      userAvatar.addEventListener('click', onUserAvatarPreventDefault);
    }
  };

  document.addEventListener('mousemove', onUserAvatarMousemove);
  document.addEventListener('mouseup', onUserAvatarMouseup);
};

userAvatar.addEventListener('mousedown', onUserAvatarMousedown);
