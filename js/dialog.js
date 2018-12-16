'use strict';

(function () {
  var userAvatar = document.querySelector('.upload');

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

      window.setup.setupContainer.style.top = (window.setup.setupContainer.offsetTop + newPosition.y) + 'px';
      window.setup.setupContainer.style.left = (window.setup.setupContainer.offsetLeft + newPosition.x) + 'px';
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

})();

