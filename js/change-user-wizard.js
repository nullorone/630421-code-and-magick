'use strict';
// Описание функционала изменения вида персонажа игрока

(function () {

  // Мантия персонажа игрока
  var coat = window.setup.setup.querySelector('.wizard-coat');

  // Инпут с цветом мантии персонажа игрока, который отправляет цвет на сервер
  var inputWizardCoat = window.setup.setup.querySelector('input[name="coat-color"]');

  // Цвет глаз персонажа игрока
  var eyes = window.setup.setup.querySelector('.wizard-eyes');

  // Инпут с цветом глаз персонажа игрока, который отправляет цвет на сервер
  var inputWizardEyes = window.setup.setup.querySelector('input[name="eyes-color"]');

  // Цвет фаербола персонажа игрока
  var fireball = window.setup.setup.querySelector('.setup-fireball-wrap');

  // Инпут с цветом фаербола персонажа игрока, который отправляет цвет на сервер
  var inputWizardFireball = window.setup.setup.querySelector('input[name="fireball-color"]');

  // Меняет цвет мантии при клике на мантию персонажа игрока
  var onCoatClick = function () {
    var newWizardCoatColor = coat.style.fill = window.data.WIZARD_COAT_COLOR[window.utils.randomIntegerInRange(0, window.data.WIZARD_COAT_COLOR.length - 1)];
    inputWizardCoat.value = newWizardCoatColor;
  };

  // Меняет цвет глаз при клике на глаза персонажа игрока
  var onEyesClick = function () {
    var newWizardEyesColor = eyes.style.fill = window.data.WIZARD_EYES_COLOR[window.utils.randomIntegerInRange(0, window.data.WIZARD_EYES_COLOR.length - 1)];
    inputWizardEyes.value = newWizardEyesColor;
  };

  // Меняет цвет фаербола при клике на фаербол персонажа игрока
  var onFireballClick = function () {
    var newWizardFireballColor = fireball.style.background = window.data.WIZARD_FIREBALL_COLOR[window.utils.randomIntegerInRange(0, window.data.WIZARD_FIREBALL_COLOR.length - 1)];
    inputWizardFireball.value = newWizardFireballColor;
  };

  window.changeUserWizard = {
    wizardCoat: coat,
    wizardEyes: eyes,
    wizardFireball: fireball,
    onWizardCoatClick: onCoatClick,
    onWizardEyesClick: onEyesClick,
    onWizardFireballClick: onFireballClick
  };
})();
