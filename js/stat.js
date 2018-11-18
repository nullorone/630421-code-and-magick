'use strict';

window.renderStatistics = function (ctx, names, times) {
  var CLOUD_WIDTH = 420; // Ширина облака статистики
  var CLOUD_HEIGH = 270; // Высота облака статистики
  var MAX_HEIGHT_BAR = 150; // Максимальная высота столбцов
  var GAP_BAR = 50; // Промежуток между столбцами
  var WIDTH_BAR = 40; // Ширина столбца
  var RESULT_POSITION_X = 150; // Начальная позиция по-горизонтали для начала отрисовки результатов статистики
  var PLAYER_NAME_POSITION_Y = 270; // Начальная позиция по-вертикали имени игрока
  var PLAYER_BAR_POSITION_Y = 100; // Начальная позиция по-вертикали столбца игрока

  // Инициализирует отрисовку поля статистики
  var fieldStat = function () {
    ctx.fillStyle = 'rgba(0, 0, 0, 0.7)';
    ctx.fillRect(110, 20, CLOUD_WIDTH, CLOUD_HEIGH);
    ctx.fillStyle = '#ffffff';
    ctx.fillRect(100, 10, CLOUD_WIDTH, CLOUD_HEIGH);
  };

  // Инициализирует отрисовку текста внутри поля статистики
  var textInsetStat = function () {
    ctx.font = '16px PT Mono';
    ctx.fillStyle = '#000000';
    ctx.fillText('Ура вы победили!', 120, 40);
    ctx.fillText('Список результатов:', 120, 60);
  };

  // Находит максимальное значение в массиве времени прохождения игроков
  var getMaxTimes = function () {
    var maxElement = times[0];
    for (var i = 0; i < times.length; i++) {
      if (maxElement < times[i]) {
        maxElement = times[i];
      }
    }
    return maxElement;
  };

  var maxTime = getMaxTimes(); // Записывает максимальное значение массива в переменную

  // Проверка поддержки браузером canvas
  if (ctx) {
    fieldStat(); // Отрисовываем поле статистики
    textInsetStat(); // Отрисовываем текст в поле статистики

    // Отрисовываем имя и столбец каждого игрока
    for (var i = 0; i < names.length; i++) {
      var blueColorSaturation = 255 - Math.floor(Math.random() * 100); // Рандомное значение насыщенности при каждой итерации
      var heightBarPlayer = (MAX_HEIGHT_BAR * times[i]) / maxTime; // Записывает расчет высоты столбца игрока согласно пропорции к максимальной высоте столбцов
      var textTimesPositionY = MAX_HEIGHT_BAR - heightBarPlayer - 10; // Положение по-вертикали текста с результатом игрока

      ctx.fillText(
          names[i],
          RESULT_POSITION_X + i * (GAP_BAR + WIDTH_BAR),
          PLAYER_NAME_POSITION_Y
      ); // Отрисовка имени игрока. На каждой итерации смещает начальную позицию на 90px по-горизонтали
      ctx.fillStyle = 'rgb(0, 0,' + blueColorSaturation + ')';

      // Если имя игрока 'Вы' - отрисовка столбца красным цветом
      if (names[i] === 'Вы') {
        ctx.fillStyle = 'rgba(255, 0, 0, 1)';
      }
      ctx.fillRect(RESULT_POSITION_X + i * (GAP_BAR + WIDTH_BAR), PLAYER_BAR_POSITION_Y, WIDTH_BAR, MAX_HEIGHT_BAR);
      ctx.fillStyle = '#ffffff';
      ctx.fillRect(RESULT_POSITION_X + i * (GAP_BAR + WIDTH_BAR), PLAYER_BAR_POSITION_Y, WIDTH_BAR, MAX_HEIGHT_BAR - heightBarPlayer);
      ctx.fillStyle = '#000000';
      ctx.fillText(Math.floor(times[i]), RESULT_POSITION_X + i * (GAP_BAR + WIDTH_BAR), PLAYER_BAR_POSITION_Y + textTimesPositionY); // Отрисовывает результат игрока с заданным положением относительно столбца
    }
  }
};

