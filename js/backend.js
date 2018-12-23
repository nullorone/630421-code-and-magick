'use strict';
(function () {
  // var URL_LOAD = 'https://js.dump.academy/code-and-magick/data';
  var URL_SEND = 'https://js.dump.academy/code-and-magick';

  var xhr = new XMLHttpRequest();

  // var loadingData = function (onLoad, onError) {
  //   xhr.responseType = 'json';
  //   xhr.open('GET', URL_LOAD);
  //   xhr.addEventListener('load', onLoad);
  //   xhr.addEventListener('error', onError);
  //   xhr.addEventListener('timeout', function () {
  //     xhr.timeout = 10000;
  //     onError('Запрос не успел выполниться за ' + xhr.timeout + 'мс');
  //   });
  //   xhr.send();

  //   return xhr.response;
  // };

  // Устанавливает задержку скрытия окна настроек игрока
  var setDelayHidePlayerSettings = function () {
    setTimeout(function () {
      window.setup.hidePlayerSettings();
    }, 2000);
  };

  var onSuccess = function (data) {
    console.log(data);
  };

  var onError = function (message) {
    alert(message);
    setDelayHidePlayerSettings();
  };

  var comparesStatus = function (status) {
    var statuses = {
      200: onSuccess(xhr.response),
      400: 'Неверный запрос',
      401: 'Пользователь не авторизован',
      404: 'Ничего не найдено',
      500: 'Внутренняя ошибка сервера'
    };

    return statuses[status];
  };

  // var onLoad = function () {
  //   if (comparesStatus(xhr.status) !== 200) {
  //     onError(comparesStatus(xhr.status));
  //   }
  // };

  var changesButtonSubmitForm = function (bgColor, text, accessibility) {
    var buttonSubmitForm = document.querySelector('.setup-submit');
    buttonSubmitForm.style.background = bgColor;
    buttonSubmitForm.innerText = text;
    buttonSubmitForm.disabled = accessibility;
  };

  var savesData = function (data) {
    xhr.open('POST', URL_SEND);

    changesButtonSubmitForm('gray', 'Сохраняем...', true);

    xhr.addEventListener('load', function () {
      switch (xhr.status) {
        case 200:
          changesButtonSubmitForm('#1cb34d', 'Настройки успешно сохранились', true);
          setDelayHidePlayerSettings();
          break;

        case 400:
          onError(comparesStatus(xhr.status));
          break;

        case 500:
          onError(comparesStatus(xhr.status));
          break;
      }

    });

    xhr.addEventListener('error', function () {
      onError('Произошла ошибка соединения');
      setDelayHidePlayerSettings();
    });
    xhr.timeout = 1000; // 1сек
    xhr.addEventListener('timeout', function () {
      onError('Запрос не успел выполниться за ' + xhr.timeout + 'мс');
      setDelayHidePlayerSettings();
    });

    xhr.send(data);
  };

  window.backend = {
    // load: loadingData,
    save: savesData
  };
})();
