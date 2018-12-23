'use strict';
(function () {
  var URL_LOAD = 'https://js.dump.academy/code-and-magick/data';
  var URL_SEND = 'https://js.dump.academy/code-and-magick';
  var TIMEOUT = 10000;

  var loadingData = function () {
    var xhr = new XMLHttpRequest();
    xhr.responseType = 'json';
    xhr.timeout = TIMEOUT;

    xhr.addEventListener('load', function () {
      if (xhr.status === 200) {
        window.setup.getSimilarWizards(xhr.response);
      } else if (xhr.status >= 400 || xhr.status <= 526) {
        onError(xhr.status, comparesStatus(xhr.status));
      }
    });

    xhr.addEventListener('error', function () {
      onError('Произошла ошибка сервера');
    });

    xhr.addEventListener('timeout', function () {
      onError('Запрос не успел выполниться за ' + xhr.timeout + 'мс');
    });

    xhr.open('GET', URL_LOAD);
    xhr.send();

  };

  // Устанавливает задержку скрытия окна настроек игрока
  var setDelayHidePlayerSettings = function () {
    setTimeout(function () {
      window.setup.hidePlayerSettings();
    }, 2000);
  };

  // var onSuccess = function (data) {

  //   console.log(data);
  // };

  var onError = function (errorCode, message) {
    var node = document.createElement('div');
    node.style = 'z-index: 100; margin: 0 auto; text-align: center; background-color: red;';
    node.style.position = 'absolute';
    node.style.left = 0;
    node.style.right = 0;
    node.style.fontSize = '30px';
    node.textContent = ('Ошибка ' + errorCode + ' ' + message);
    document.body.insertAdjacentElement('afterbegin', node);
  };

  var comparesStatus = function (status) {
    var statuses = {
      400: 'Неверный запрос',
      401: 'Пользователь не авторизован',
      404: 'Ничего не найдено',
      500: 'Внутренняя ошибка сервера'
    };

    return statuses[status];
  };

  // var onLoad = function (response) {
  //   return response;
  // };

  var changesButtonSubmitForm = function (bgColor, text, accessibility) {
    var buttonSubmitForm = document.querySelector('.setup-submit');
    buttonSubmitForm.style.background = bgColor;
    buttonSubmitForm.innerText = text;
    buttonSubmitForm.disabled = accessibility;
  };

  var savesData = function (data) {
    var xhr = new XMLHttpRequest();
    xhr.timeout = TIMEOUT;

    changesButtonSubmitForm('gray', 'Сохраняем...', true);

    xhr.addEventListener('load', function () {
      if (xhr.status === 200) {
        changesButtonSubmitForm('#1cb34d', 'Настройки успешно сохранились', true);
        setDelayHidePlayerSettings();
      } else if (xhr.status >= 400 || xhr.status <= 526) {
        onError(xhr.status, comparesStatus(xhr.status));
      }
    });

    xhr.addEventListener('error', function () {
      onError('Произошла ошибка соединения');
      setDelayHidePlayerSettings();
    });

    xhr.addEventListener('timeout', function () {
      onError('Запрос не успел выполниться за ' + xhr.timeout + 'мс');
      setDelayHidePlayerSettings();
    });

    xhr.open('POST', URL_SEND);
    xhr.send(data);
  };

  window.backend = {
    load: loadingData,
    save: savesData
  };
})();
