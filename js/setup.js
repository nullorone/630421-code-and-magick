'use strict';

(function () {
  var getWizards = function () {
    var wizards = [];
    for (var i = 0; i < window.data.WIZARDS_NUMBER; i++) {
      var wizardTemplate = {
        'name': window.data.WIZARD_NAME[window.utils.randomIntegerInRange(0, window.data.WIZARD_NAME.length)] +
          ' ' +
          window.data.WIZARD_SURNAME[window.utils.randomIntegerInRange(0, window.data.WIZARD_SURNAME.length)],
        'coatColor': window.data.WIZARD_COAT_COLOR[window.utils.randomIntegerInRange(0, window.data.WIZARD_COAT_COLOR.length)],
        'eyesColor': window.data.WIZARD_EYES_COLOR[window.utils.randomIntegerInRange(0, window.data.WIZARD_EYES_COLOR.length)]
      };
      wizards.push(wizardTemplate);
    }
    return wizards;
  };

  var similarList = document.querySelector('.setup-similar-list');

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
    return similarList.appendChild(fragment);
  };

  var setupSimilar = document.querySelector('.setup-similar');
  setupSimilar.classList.remove('hidden');

  window.setup = {
    similarWizards: getSimilarWizards,
    wizards: getWizards(),
    wizardsList: similarList
  };

})();


