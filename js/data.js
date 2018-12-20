'use strict';
(function () {
  var data = {
    WIZARD_NAME: [
      'Иван',
      'Хуан Себастьян',
      'Мария',
      'Кристоф',
      'Виктор',
      'Юлия',
      'Люпита',
      'Вашингтон'
    ],
    WIZARD_SURNAME: [
      'да Марья',
      'Верон',
      'Мирабелла',
      'Вальц',
      'Онопко',
      'Топольницкая',
      'Нионго',
      'Ирвинг'
    ],
    WIZARD_COAT_COLOR: [
      'rgb(101, 137, 164)',
      'rgb(241, 43, 107)',
      'rgb(146, 100, 161)',
      'rgb(56, 159, 117)',
      'rgb(215, 210, 55)',
      'rgb(0, 0, 0)'
    ],
    WIZARD_EYES_COLOR: ['black', 'red', 'blue', 'yellow', 'green'],
    WIZARD_FIREBALL_COLOR: [
      '#ee4830',
      '#30a8ee',
      '#5ce6c0',
      '#e848d5',
      '#e6e848'
    ],
    WIZARDS_NUMBER: 4
  };

  var getWizards = function () {
    var wizards = [];
    for (var i = 0; i < data.WIZARDS_NUMBER; i++) {
      var wizardTemplate = {
        'name': data.WIZARD_NAME[window.utils.getRandomInteger(0, data.WIZARD_NAME.length)] +
          ' ' +
          data.WIZARD_SURNAME[window.utils.getRandomInteger(0, data.WIZARD_SURNAME.length)],
        'coatColor': data.WIZARD_COAT_COLOR[window.utils.getRandomInteger(0, data.WIZARD_COAT_COLOR.length)],
        'eyesColor': data.WIZARD_EYES_COLOR[window.utils.getRandomInteger(0, data.WIZARD_EYES_COLOR.length)]
      };
      wizards.push(wizardTemplate);
    }
    return wizards;
  };

  // Мантия персонажа игрока
  var coatWizardElement = document.querySelector('.wizard-coat');

  // Меняет цвет мантии при клике на мантию персонажа игрока
  var onWizardCoatClick = function () {
    // Инпут с цветом мантии персонажа игрока, который отправляет цвет на сервер
    var inputWizardCoat = document.querySelector('input[name="coat-color"]');
    var newWizardCoatColor = coatWizardElement.style.fill = data.WIZARD_COAT_COLOR[window.utils.getRandomInteger(0, data.WIZARD_COAT_COLOR.length - 1)];
    inputWizardCoat.value = newWizardCoatColor;
  };

  // Цвет глаз персонажа игрока
  var eyesWizardElement = document.querySelector('.wizard-eyes');

  // Меняет цвет глаз при клике на глаза персонажа игрока
  var onWizardEyesClick = function () {
    // Инпут с цветом глаз персонажа игрока, который отправляет цвет на сервер
    var inputWizardEyes = document.querySelector('input[name="eyes-color"]');
    var newWizardEyesColor = eyesWizardElement.style.fill = data.WIZARD_EYES_COLOR[window.utils.getRandomInteger(0, data.WIZARD_EYES_COLOR.length - 1)];
    inputWizardEyes.value = newWizardEyesColor;
  };

  // Цвет фаербола персонажа игрока
  var fireballWizardElement = document.querySelector('.setup-fireball-wrap');

  // Меняет цвет фаербола при клике на фаербол персонажа игрока
  var onWizardFireballClick = function () {
    // Инпут с цветом фаербола персонажа игрока, который отправляет цвет на сервер
    var inputWizardFireball = document.querySelector('input[name="fireball-color"]');
    var newWizardFireballColor = fireballWizardElement.style.background = data.WIZARD_FIREBALL_COLOR[window.utils.getRandomInteger(0, data.WIZARD_FIREBALL_COLOR.length - 1)];
    inputWizardFireball.value = newWizardFireballColor;
  };

  var getchangeWizardListeners = function () {
    // При клике на глаза волшебника, меняется цвет глаз
    eyesWizardElement.addEventListener('click', onWizardEyesClick);
    // При клике на мантию, меняется цвет мантии
    coatWizardElement.addEventListener('click', onWizardCoatClick);
    // При клике на фаербол, меняется цвет фаербола
    fireballWizardElement.addEventListener('click', onWizardFireballClick);
  };

  window.data = {
    getWizards: getWizards,
    change: getchangeWizardListeners
  };
})();
