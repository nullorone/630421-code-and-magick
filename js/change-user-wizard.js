'use strict';
(function () {
  var changesElementsWizard = {
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
    ]
  };

  // Возвращает случайное значение из массива изменяемого элемента
  var getRandomValueElement = function (element) {
    var newElement = element[window.utils.getRandomInteger(
        0,
        element.length - 1
    )];
    return newElement;
  };

  // Мантия персонажа игрока
  var coatWizardElement = document.querySelector('.wizard-coat');

  // Меняет цвет мантии при клике на мантию персонажа игрока
  var onWizardCoatClick = function () {
    // Инпут с цветом мантии персонажа игрока, который отправляет цвет на сервер
    var inputWizardCoat = document.querySelector('input[name="coat-color"]');
    coatWizardElement.style.fill = getRandomValueElement(changesElementsWizard.WIZARD_COAT_COLOR);
    inputWizardCoat.value = coatWizardElement.style.fill;
  };

  // Цвет глаз персонажа игрока
  var eyesWizardElement = document.querySelector('.wizard-eyes');

  // Меняет цвет глаз при клике на глаза персонажа игрока
  var onWizardEyesClick = function () {
    // Инпут с цветом глаз персонажа игрока, который отправляет цвет на сервер
    var inputWizardEyes = document.querySelector('input[name="eyes-color"]');
    eyesWizardElement.style.fill = getRandomValueElement(changesElementsWizard.WIZARD_EYES_COLOR);
    inputWizardEyes.value = eyesWizardElement.style.fill;
  };

  // Цвет фаербола персонажа игрока
  var fireballWizardElement = document.querySelector('.setup-fireball-wrap');

  // Меняет цвет фаербола при клике на фаербол персонажа игрока
  var onWizardFireballClick = function () {
    // Инпут с цветом фаербола персонажа игрока, который отправляет цвет на сервер
    var inputWizardFireball = document.querySelector('input[name="fireball-color"]');
    fireballWizardElement.style.background = getRandomValueElement(changesElementsWizard.WIZARD_FIREBALL_COLOR);
    inputWizardFireball.value = fireballWizardElement.style.background;
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
