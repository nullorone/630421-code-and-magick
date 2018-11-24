'use strict';

// Находим случайное число в указанных диапазонах
var getRandomValue = function (min, max) {
  var randomInteger = Math.random() * (max + 1 - min) + min;
  randomInteger = Math.floor(randomInteger);
  return randomInteger;
};

var setupContainer = document.querySelector('.setup');
setupContainer.classList.remove('hidden');

var getWizards = function (
    wizardName,
    wizardSurname,
    wizardCoatColor,
    wizardEyesColor
) {
  var wizards = [];
  for (var i = 0; i < 4; i++) {
    var wizardTemplate = {
      'name':
        wizardName[getRandomValue(0, wizardName.length - 1)] +
        ' ' +
        wizardSurname[getRandomValue(0, wizardSurname.length - 1)],
      'coatColor': wizardCoatColor[getRandomValue(0, wizardCoatColor.length - 1)],
      'eyesColor': wizardEyesColor[getRandomValue(0, wizardEyesColor.length - 1)]
    };
    wizards.push(wizardTemplate);
  }
  return wizards;
};

var wizardsData = getWizards(
    [
      'Иван',
      'Хуан Себастьян',
      'Мария',
      'Кристоф',
      'Виктор',
      'Юлия',
      'Люпита',
      'Вашингтон'
    ],
    [
      'да Марья',
      'Верон',
      'Мирабелла',
      'Вальц',
      'Онопко',
      'Топольницкая',
      'Нионго',
      'Ирвинг'
    ],
    [
      'rgb(101, 137, 164)',
      'rgb(241, 43, 107)',
      'rgb(146, 100, 161)',
      'rgb(56, 159, 117)',
      'rgb(215, 210, 55)',
      'rgb(0, 0, 0)'
    ],
    ['black', 'red', 'blue', 'yellow', 'green']
);

var getSimilarWizards = function () {
  var fragment = document.createDocumentFragment();
  var setupSimilarList = document.querySelector('.setup-similar-list');
  for (var j = 0; j < wizardsData.length; j++) {
    var similarWizardTemplate = document
      .querySelector('#similar-wizard-template')
      .content.cloneNode(true);
    similarWizardTemplate.querySelector('.setup-similar-label').textContent =
      wizardsData[j].name;
    similarWizardTemplate.querySelector('.wizard-coat').style.fill =
      wizardsData[j].coatColor;
    similarWizardTemplate.querySelector('.wizard-eyes').style.fill =
      wizardsData[j].eyesColor;
    fragment.appendChild(similarWizardTemplate);
  }
  return setupSimilarList.appendChild(fragment);
};

getSimilarWizards();

var setupSimilar = document.querySelector('.setup-similar');
setupSimilar.classList.remove('hidden');
