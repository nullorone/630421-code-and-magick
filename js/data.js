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
        'eyesColor': data.WIZARD_EYES_COLOR[window.utils.getRandomInteger(0, data.WIZARD_EYES_COLOR.length)],
        'fireballColor': data.WIZARD_FIREBALL_COLOR[window.utils.getRandomInteger(0, data.WIZARD_FIREBALL_COLOR.length)]
      };
      wizards.push(wizardTemplate);
    }
    return wizards;
  };

  window.data = {
    getWizards: getWizards
  };
})();
