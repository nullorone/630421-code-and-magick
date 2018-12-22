'use strict';
(function () {
  var compareElements = {
    eyesColor: 'eyesColor',
    coatColor: 'coatColor',
    fireballColor: 'fireballColor'
  };

  var generatedRandomValueElement = function (array, element) {
    var randomValueElement = array[window.utils.getRandomInteger(0, array.length - 1)];
    return randomValueElement[element];
  };

  // Мантия персонажа игрока
  var coatWizardElement = document.querySelector('.wizard-coat');

  // Меняет цвет мантии при клике на мантию персонажа игрока
  var onWizardCoatClick = function () {
    // Инпут с цветом мантии персонажа игрока, который отправляет цвет на сервер
    var inputWizardCoat = document.querySelector('input[name="coat-color"]');
    var newWizardCoatColor = coatWizardElement.style.fill = generatedRandomValueElement(window.data.getWizards(), compareElements.eyesColor);
    inputWizardCoat.value = newWizardCoatColor;
  };

  // Цвет глаз персонажа игрока
  var eyesWizardElement = document.querySelector('.wizard-eyes');

  // Меняет цвет глаз при клике на глаза персонажа игрока
  var onWizardEyesClick = function () {
    // Инпут с цветом глаз персонажа игрока, который отправляет цвет на сервер
    var inputWizardEyes = document.querySelector('input[name="eyes-color"]');
    var newWizardEyesColor = eyesWizardElement.style.fill = generatedRandomValueElement(window.data.getWizards(), compareElements.coatColor);
    inputWizardEyes.value = newWizardEyesColor;
  };

  // Цвет фаербола персонажа игрока
  var fireballWizardElement = document.querySelector('.setup-fireball-wrap');

  // Меняет цвет фаербола при клике на фаербол персонажа игрока
  var onWizardFireballClick = function () {
    // Инпут с цветом фаербола персонажа игрока, который отправляет цвет на сервер
    var inputWizardFireball = document.querySelector('input[name="fireball-color"]');
    var newWizardFireballColor = fireballWizardElement.style.background = generatedRandomValueElement(window.data.getWizards(), compareElements.fireballColor);
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

  window.changeUserWizard = {
    getchangeWizardListeners: getchangeWizardListeners
  };
})();
