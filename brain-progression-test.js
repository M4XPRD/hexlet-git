import gameEngine from '../index.js';

const getRndInteger = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;

const progressionArray = (number, step) => {
  const newArray = [];
  const arrayLength = getRndInteger(5, 15);
  for (let i = number; newArray.length < arrayLength; i += step) {
    newArray.push(i);
  }
  return newArray;
};

const gameSettings = () => {
  const randomNumber = getRndInteger(1, 10);
  const rowStep = getRndInteger(1, 5);
  const randomIndex = getRndInteger(1, 10);

  const gameProgression = progressionArray(randomNumber, rowStep);

  const hiddenNumber = (index) => {
    let result = index;
    if (index.length > gameProgression.length) {
      result -= 1;
    }
    return result;
  };

  const gameAnswer = String(gameProgression[hiddenNumber(randomIndex)]);

  gameProgression[hiddenNumber(randomIndex)] = '..';

  const gameQuestion = gameProgression.join(' ');

  return [gameQuestion, gameAnswer];
};

const gameRule = 'What number is missing in the progression?';

const brainProgression = () => gameEngine(gameRule, gameSettings);

-- INSERT --                                                                                                                 29,18         Top