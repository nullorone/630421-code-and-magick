'use strict';

// Находим случайное число в указанных диапазонах
var randomValue = function (min, max) {
  var randromInteger = Math.random() * (max + 1 - min) + min;
  randromInteger = Math.floor(randromInteger);
  return randromInteger;
};

var setupContainer = document.querySelector('.setup');
setupContainer.classList.remove('hidden');

var wizards = function (
    wizardName,
    wizardSurname,
    wizardCoatColor,
    wizardEyesColor
) {
  var wizardsArr = [];
  for (var i = 0; i < 4; i++) {
    var wizardTemplate = {
      'name':
        wizardName[randomValue(0, wizardName.length - 1)] +
        ' ' +
        wizardSurname[randomValue(0, wizardSurname.length - 1)],
      'coatColor': wizardCoatColor[randomValue(0, wizardCoatColor.length - 1)],
      'eyesColor': wizardEyesColor[randomValue(0, wizardEyesColor.length - 1)],
    };
    wizardsArr.push(wizardTemplate);
  }
  return wizardsArr;
};

var wizardsObject = wizards(
    [
      'Иван',
      'Хуан Себастьян',
      'Мария',
      'Кристоф',
      'Виктор',
      'Юлия',
      'Люпита',
      'Вашингтон',
    ],
    [
      'да Марья',
      'Верон',
      'Мирабелла',
      'Вальц',
      'Онопко',
      'Топольницкая',
      'Нионго',
      'Ирвинг',
    ],
    [
      'rgb(101, 137, 164)',
      'rgb(241, 43, 107)',
      'rgb(146, 100, 161)',
      'rgb(56, 159, 117)',
      'rgb(215, 210, 55)',
      'rgb(0, 0, 0)',
    ],
    ['black', 'red', 'blue', 'yellow', 'green']
);

var wizardsGenerate = function () {
  var fragment = document.createDocumentFragment();
  var wizardTemplateHTML = document.querySelector('.setup-similar-list');
  for (var j = 0; j < wizardsObject.length; j++) {
    var wizardElement = document
      .querySelector('#similar-wizard-template')
      .content.cloneNode(true);
    wizardElement.querySelector('.setup-similar-label').textContent =
      wizardsObject[j].name;
    wizardElement.querySelector('.wizard-coat').style.fill =
      wizardsObject[j].coatColor;
    wizardElement.querySelector('.wizard-eyes').style.fill =
      wizardsObject[j].eyesColor;
    fragment.appendChild(wizardElement);
  }
  return wizardTemplateHTML.appendChild(fragment);
};

wizardsGenerate();

var setupSimilar = document.querySelector('.setup-similar');
setupSimilar.classList.remove('hidden');
