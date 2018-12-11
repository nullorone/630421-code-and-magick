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

  var onUserAvatarMousemove = function (mouseEvt) {
    mouseEvt.preventDefault();
    dragged = true;
    var newPosition = {
      x: mouseEvt.clientX - defaultPosition.x,
      y: mouseEvt.clientY - defaultPosition.y
    };

    defaultPosition = {
      x: mouseEvt.clientX,
      y: mouseEvt.clientY
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
