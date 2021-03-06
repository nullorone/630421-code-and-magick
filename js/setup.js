'use strict';

var WIZARD_NAME = [
  'Иван',
  'Хуан Себастьян',
  'Мария',
  'Кристоф',
  'Виктор',
  'Юлия',
  'Люпита',
  'Вашингтон'
];

var WIZARD_SURNAME = [
  'да Марья',
  'Верон',
  'Мирабелла',
  'Вальц',
  'Онопко',
  'Топольницкая',
  'Нионго',
  'Ирвинг'
];

var WIZARD_COAT_COLOR = [
  'rgb(101, 137, 164)',
  'rgb(241, 43, 107)',
  'rgb(146, 100, 161)',
  'rgb(56, 159, 117)',
  'rgb(215, 210, 55)',
  'rgb(0, 0, 0)'
];

var WIZARD_EYES_COLOR = ['black', 'red', 'blue', 'yellow', 'green'];

var WIZARD_FIREBALL_COLOR = [
  '#ee4830',
  '#30a8ee',
  '#5ce6c0',
  '#e848d5',
  '#e6e848'
];

var WIZARDS_NUMBER = 4;

var ENTER_KEYCODE = 13;

var ESC_KEYCODE = 27;

// Находим случайное число в указанных диапазонах
var getRandomInt = function (min, max) {
  var randomInteger = Math.floor(Math.random() * (max - min) + min);
  return randomInteger;
};

var getWizards = function () {
  var wizards = [];
  for (var i = 0; i < WIZARDS_NUMBER; i++) {
    var wizardTemplate = {
      'name': WIZARD_NAME[getRandomInt(0, WIZARD_NAME.length)] +
        ' ' +
        WIZARD_SURNAME[getRandomInt(0, WIZARD_SURNAME.length)],
      'coatColor': WIZARD_COAT_COLOR[getRandomInt(0, WIZARD_COAT_COLOR.length)],
      'eyesColor': WIZARD_EYES_COLOR[getRandomInt(0, WIZARD_EYES_COLOR.length)]
    };
    wizards.push(wizardTemplate);
  }
  return wizards;
};

var getSimilarWizards = function (wizards) {
  var fragment = document.createDocumentFragment();
  var wizardsList = document.querySelector('.setup-similar-list');
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

getSimilarWizards(getWizards());

var setupSimilar = document.querySelector('.setup-similar');
setupSimilar.classList.remove('hidden');

// Описание обработки показа/скрытия настроек игрока

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
  setupContainer.style.top = setupContainerPosition.y + 'px';
  setupContainer.style.left = setupContainerPosition.x + 'px';
  document.removeEventListener('keydown', onDocumentKeydownEsc);
};

var onButtonCloseClick = function () {
  hidePlayerSettings();
};

// Открывает настройками игрока при фокусе на иконку игрока и нажатии Enter
var onIconPlayerKeydownEnter = function (evt) {
  if (evt.keyCode === ENTER_KEYCODE) {
    showPlayerSettings();
  }
};

// Скрывает настройками игрока при фокусе на иконку игрока и нажатии Enter
var onButtonCLoseKeydownEnter = function (evt) {
  if (evt.keyCode === ENTER_KEYCODE) {
    hidePlayerSettings();
  }
};

// Добавляет класс hidden если был нажат Esc
var onDocumentKeydownEsc = function (evt) {
  if (evt.keyCode === ESC_KEYCODE) {
    hidePlayerSettings();
  }
};

// Отправляет настройки игрока на сервер по нажатию на Enter
var onButtonSubmitKeydownEnter = function (evt) {
  // evt.preventDefault();
  if (evt.keyCode === ENTER_KEYCODE) {
    formPlayerSettings.submit();
  }
};

// Описание функционала измененния вида персонажа игрока

// Мантия персонажа игрока
var wizardCoat = setupContainer.querySelector('.wizard-coat');

// Инпут с цветом мантии персонажа игрока, который отправляет цвет на сервер
var inputWizardCoat = setupContainer.querySelector('input[name="coat-color"]');

// Цвет глаз персонажа игрока
var wizardEyes = setupContainer.querySelector('.wizard-eyes');

// Инпут с цветом глаз персонажа игрока, который отправляет цвет на сервер
var inputWizardEyes = setupContainer.querySelector('input[name="eyes-color"]');

// Цвет фаербола персонажа игрока
var wizardFireball = setupContainer.querySelector('.setup-fireball-wrap');

// Инпут с цветом фаербола персонажа игрока, который отправляет цвет на сервер
var inputWizardFireball = setupContainer.querySelector('input[name="fireball-color"]');

// Меняет цвет мантии при клике на мантию персонажа игрока
var onWizardCoatClick = function () {
  var newWizardCoatColor = wizardCoat.style.fill = WIZARD_COAT_COLOR[getRandomInt(0, WIZARD_COAT_COLOR.length - 1)];
  inputWizardCoat.value = newWizardCoatColor;
};

// Меняет цвет глаз при клике на глаза персонажа игрока
var onWizardEyesClick = function () {
  var newWizardEyesColor = wizardEyes.style.fill = WIZARD_EYES_COLOR[getRandomInt(0, WIZARD_EYES_COLOR.length - 1)];
  inputWizardEyes.value = newWizardEyesColor;
};

// Меняет цвет фаербола при клике на фаербол персонажа игрока
var onWizardFireballClick = function () {
  var newWizardFireballColor = wizardFireball.style.background = WIZARD_FIREBALL_COLOR[getRandomInt(0, WIZARD_FIREBALL_COLOR.length - 1)];
  inputWizardFireball.value = newWizardFireballColor;
};

// Функция отображения формы с настройками игрока
var showPlayerSettings = function () {
  setupContainer.classList.remove('hidden');
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
  wizardEyes.addEventListener('click', onWizardEyesClick);
  // При клике на мантию, меняется цвет мантии
  wizardCoat.addEventListener('click', onWizardCoatClick);
  // При клике на фаербол, меняется цвет фаербола
  wizardFireball.addEventListener('click', onWizardFireballClick);
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
