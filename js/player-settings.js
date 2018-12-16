'use strict';
// Описание обработки показа/скрытия настроек игрока

(function () {

  // Иконка игрока на главной странице
  var playerSettings = document.querySelector('.setup-open-icon');

  // Окно с настройками игрока
  var setupContainer = document.querySelector('.setup');

  // Инпут окна с именем игрока
  var inputPlayerName = setupContainer.querySelector('.setup-user-name');

  // Иконка закрытия настроек игрока
  var buttonClosePlayerSettings = setupContainer.querySelector('.setup-close');

  // Кнопка отправки настроек игрока на сервер
  var buttonSubmitPlayerSettings = setupContainer.querySelector('.setup-submit');

  // Форма с настройками персонажа игрока
  var formPlayerSettings = document.querySelector('.setup-wizard-form');

  // Изначальные координаты окна с настройками игрока относительно страницы
  var setupContainerPosition = {
    x: setupContainer.offsetLeft,
    y: setupContainer.offsetTop
  };

  // Удаляет обработчик события скрытия окна по нажатию Esc
  var onInputNameFocus = function () {
    document.removeEventListener('keydown', onDocumentKeydownEsc);
  };

  // Добавляет обработчик события скрытия окна по нажатию Esc
  var onPlayerSettingsKeydownEsc = function () {
    document.addEventListener('keydown', onDocumentKeydownEsc);
  };

  // Функция скрытия формы с настройками игрока
  var hidePlayerSettings = function () {
    setupContainer.classList.add('hidden');
    while (window.setup.wizardsList.firstElementChild) {
      window.setup.wizardsList.firstElementChild.remove();
    }
    setupContainer.style.top = setupContainerPosition.y + 'px';
    setupContainer.style.left = setupContainerPosition.x + 'px';
    document.removeEventListener('keydown', onDocumentKeydownEsc);
  };

  var onButtonCloseClick = function () {
    hidePlayerSettings();
  };

  // Открывает настройками игрока при фокусе на иконку игрока и нажатии Enter
  var onIconPlayerKeydownEnter = function (evt) {
    if (window.utils.keydownEvent(evt, window.data.ENTER_KEYCODE)) {
      showPlayerSettings();
    }
  };

  // Скрывает настройками игрока при фокусе на иконку игрока и нажатии Enter
  var onButtonCLoseKeydownEnter = function (evt) {
    if (window.utils.keydownEvent(evt, window.data.ENTER_KEYCODE)) {
      hidePlayerSettings();
    }
  };

  // Добавляет класс hidden если был нажат Esc
  var onDocumentKeydownEsc = function (evt) {
    if (window.utils.keydownEvent(evt, window.data.ESC_KEYCODE)) {
      hidePlayerSettings();
    }
  };

  // Отправляет настройки игрока на сервер по нажатию на Enter
  var onButtonSubmitKeydownEnter = function (evt) {
    if (window.utils.keydownEvent(evt, window.data.ENTER_KEYCODE)) {
      formPlayerSettings.submit();
    }
  };

  // Функция отображения формы с настройками игрока
  var showPlayerSettings = function () {
    setupContainer.classList.remove('hidden');
    window.setup.similarWizards(window.setup.wizards);
    document.addEventListener('keydown', onDocumentKeydownEsc);
    // Скрываем настройки игрока при клике на кнопку закрытия настроек игрока
    buttonClosePlayerSettings.addEventListener('click', onButtonCloseClick);
    // Закрывает окно при нажатии Enter на иконке закрытия окна
    buttonClosePlayerSettings.addEventListener('keydown', onButtonCLoseKeydownEnter);
    // Отправляет форму при нажатии Enter на кнопке Сохранить
    buttonSubmitPlayerSettings.addEventListener('keydown', onButtonSubmitKeydownEnter);
    // Отменяет закрытие окна с настройками игрока при фокусе на инпуте с именем игрока
    inputPlayerName.addEventListener('focus', onInputNameFocus);
    // Возвращает возможность закрытия окна по Esc, когда фокус уйдет с input
    inputPlayerName.addEventListener('blur', onPlayerSettingsKeydownEsc);
    // При клике на глаза волшебника, меняется цвет глаз
    window.changeUserWizard.wizardEyes.addEventListener('click', window.changeUserWizard.onWizardEyesClick);
    // При клике на мантию, меняется цвет мантии
    window.changeUserWizard.wizardCoat.addEventListener('click', window.changeUserWizard.onWizardCoatClick);
    // При клике на фаербол, меняется цвет фаербола
    window.changeUserWizard.wizardFireball.addEventListener('click', window.changeUserWizard.onWizardFireballClick);
  };

  // При клике на иконку игрока, открывается окно настроек игрока
  var onIconPlayerCLick = function () {
    showPlayerSettings();
    setupContainerPosition.x = setupContainer.offsetLeft;
    setupContainerPosition.y = setupContainer.offsetTop;
  };

  // Показываем настройки игрока при клике на иконку игрока
  playerSettings.addEventListener('click', onIconPlayerCLick);

  // Показываем настройки игрока при фокусе на иконке игрока и нажатии Enter
  playerSettings.addEventListener('keydown', onIconPlayerKeydownEnter);

  window.playerSettings = {
    setup: setupContainer
  };
})();
