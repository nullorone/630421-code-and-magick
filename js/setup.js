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

var WIZARDS_NUMBER = 4;

// Находим случайное число в указанных диапазонах
var getRandomInt = function (min, max) {
  var randomInteger = Math.floor(Math.random() * (max + 1 - min) + min);
  return randomInteger;
};

var setupContainer = document.querySelector('.setup');
setupContainer.classList.remove('hidden');

var getWizards = function () {
  var wizards = [];
  for (var i = 0; i < WIZARDS_NUMBER; i++) {
    var wizardTemplate = {
      'name': WIZARD_NAME[getRandomInt(0, WIZARD_NAME.length - 1)] +
        ' ' +
        WIZARD_SURNAME[getRandomInt(0, WIZARD_SURNAME.length - 1)],
      'coatColor': WIZARD_COAT_COLOR[getRandomInt(0, WIZARD_COAT_COLOR.length - 1)],
      'eyesColor': WIZARD_EYES_COLOR[getRandomInt(0, WIZARD_EYES_COLOR.length - 1)]
    };
    wizards.push(wizardTemplate);
  }
  return wizards;
};

var wizards = getWizards();

var getSimilarWizards = function (wizardsElements) {
  var fragment = document.createDocumentFragment();
  var wizardsList = document.querySelector('.setup-similar-list');
  var wizardTemplate = document
    .querySelector('#similar-wizard-template')
    .content
    .querySelector('.setup-similar-item');
  for (var i = 0; i < wizardsElements.length; i++) {
    var wizardElement = wizardTemplate.cloneNode(true);
    wizardElement.querySelector('.setup-similar-label').textContent =
      wizardsElements[i].name;
    wizardElement.querySelector('.wizard-coat').style.fill =
      wizardsElements[i].coatColor;
    wizardElement.querySelector('.wizard-eyes').style.fill =
      wizardsElements[i].eyesColor;
    fragment.appendChild(wizardElement);
  }
  return wizardsList.appendChild(fragment);
};

getSimilarWizards(wizards);

var setupSimilar = document.querySelector('.setup-similar');
setupSimilar.classList.remove('hidden');
