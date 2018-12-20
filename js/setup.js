'use strict';

(function () {

  var keyCodes = {
    ENTER_KEYCODE: 13,
    ESC_KEYCODE: 27
  };

  var wizardsList = document.querySelector('.setup-similar-list');

  var getSimilarWizards = function (wizards) {
    var fragment = document.createDocumentFragment();
    var wizardTemplate = document
      .querySelector('#similar-wizard-template')
      .content.querySelector('.setup-similar-item');
    for (var i = 0; i < wizards.length; i++) {
      var wizardElement = wizardTemplate.cloneNode(true);
      wizardElement.querySelector('.setup-similar-label').textContent =
      wizards[i].name;
      wizardElement.querySelector('.wizard-coat').style.fill =
      wizards[i].coatColor;
      wizardElement.querySelector('.wizard-eyes').style.fill =
      wizards[i].eyesColor;
      fragment.appendChild(wizardElement);
    }
    return wizardsList.appendChild(fragment);
  };

  // Блок с похожими персонажами
  var setupSimilar = document.querySelector('.setup-similar');
  setupSimilar.classList.remove('hidden');

  // Окно с настройками игрока
  var setup = document.querySelector('.setup');

  // Изначальные координаты окна с настройками игрока относительно страницы
  var setupPosition = {
    x: setup.offsetLeft,
    y: setup.offsetTop
  };

  // Функция отображения формы с настройками игрока
  var showPlayerSettings = function () {
    setup.classList.remove('hidden');
    getSimilarWizards(window.data.getWizards());
    document.addEventListener('keydown', onDocumentKeydown);
    getButtonCloseListeners();
    getFormPlayerSettingsListeners();
    // Добавляет обработчики изменения цвета элементов мага игрока
    window.data.change();
  };

  // Функция скрытия формы с настройками игрока
  var hidePlayerSettings = function () {
    setup.classList.add('hidden');
    while (wizardsList.firstElementChild) {
      wizardsList.firstElementChild.remove();
    }
    setup.style.top = setupPosition.y + 'px';
    setup.style.left = setupPosition.x + 'px';
    document.removeEventListener('keydown', onDocumentKeydown);
  };

  // Добавляет класс hidden если был нажат Esc
  var onDocumentKeydown = function (evt) {
    if (window.utils.keydownEvent(evt, keyCodes.ESC_KEYCODE)) {
      hidePlayerSettings();
    }
  };

  var getIconPlayerListeners = function () {
    // Иконка игрока на главной странице
    var playerSettings = document.querySelector('.setup-open-icon');

    // При клике на иконку игрока, открывается окно настроек игрока
    var onIconPlayerCLick = function () {
      showPlayerSettings();
      setupPosition.x = setup.offsetLeft;
      setupPosition.y = setup.offsetTop;
    };

    // Открывает настройками игрока при фокусе на иконку игрока и нажатии Enter
    var onIconPlayerKeydown = function (evt) {
      if (window.utils.keydownEvent(evt, keyCodes.ENTER_KEYCODE)) {
        showPlayerSettings();
      }
    };

    // Показываем настройки игрока при клике на иконку игрока
    playerSettings.addEventListener('click', onIconPlayerCLick);
    // Показываем настройки игрока при фокусе на иконке игрока и нажатии Enter
    playerSettings.addEventListener('keydown', onIconPlayerKeydown);
  };

  // Инициализирует обработчики на иконке игрока
  getIconPlayerListeners();

  var getFormPlayerSettingsListeners = function () {
    // Инпут окна с именем игрока
    var inputPlayerName = setup.querySelector('.setup-user-name');
    // Кнопка отправки настроек игрока на сервер
    var buttonSubmitPlayerSettings = setup.querySelector('.setup-submit');

    // Удаляет обработчик события скрытия окна по нажатию Esc
    var onInputNameFocus = function () {
      document.removeEventListener('keydown', onDocumentKeydown);
    };

    // Отправляет настройки игрока на сервер по нажатию на Enter
    var onButtonSubmitKeydownEnter = function (evt) {
      if (window.utils.keydownEvent(evt, keyCodes.ENTER_KEYCODE)) {
        // Форма с настройками персонажа игрока
        var formPlayerSettings = document.querySelector('.setup-wizard-form');
        formPlayerSettings.submit();
      }
    };

    // Добавляет обработчик события скрытия окна по нажатию Esc
    var onPlayerSettingsKeydownEsc = function () {
      document.addEventListener('keydown', onDocumentKeydown);
    };

    // Отменяет закрытие окна с настройками игрока при фокусе на инпуте с именем игрока
    inputPlayerName.addEventListener('focus', onInputNameFocus);
    // Возвращает возможность закрытия окна по Esc, когда фокус уйдет с input
    inputPlayerName.addEventListener('blur', onPlayerSettingsKeydownEsc);
    // Отправляет форму при нажатии Enter на кнопке Сохранить
    buttonSubmitPlayerSettings.addEventListener('keydown', onButtonSubmitKeydownEnter);
  };

  var getButtonCloseListeners = function () {
    // Иконка закрытия настроек игрока
    var buttonClosePlayerSettings = setup.querySelector('.setup-close');
    var onButtonCloseClick = function () {
      hidePlayerSettings();
    };

    // Скрывает настройками игрока при фокусе на иконку игрока и нажатии Enter
    var onButtonCLoseKeydown = function (evt) {
      if (window.utils.keydownEvent(evt, keyCodes.ENTER_KEYCODE)) {
        hidePlayerSettings();
      }
    };

    // Скрываем настройки игрока при клике на кнопку закрытия настроек игрока
    buttonClosePlayerSettings.addEventListener('click', onButtonCloseClick);
    // Закрывает окно при нажатии Enter на иконке закрытия окна
    buttonClosePlayerSettings.addEventListener('keydown', onButtonCLoseKeydown);
  };

})();


