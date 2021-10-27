import gameEngine from '../index.js';

const mathOperations = (num1, num2, operators) => {
  let result = '';
  switch (operators) {
    case '+':
      result = num1 + num2;
      break;
    case '-':
      result = num1 - num2;
      break;
    case '*':
      result = num1 * num2;
      break;
    default:
      break;
  }
  return result;
};

  const mathOperators = ['+', '-', '*'];
  const randNumOne = Math.floor(Math.random() * 10);
  const randNumTwo = Math.floor(Math.random() * 10);
  const randOperator = Math.floor(Math.random() * 3);

  const gameRule = 'What is the result of the expression?';
  const gameQuestion = `${randNumOne} ${mathOperators[randOperator]} ${randNumTwo}`;
  const gameAnswer = String(mathOperations(randNumOne, randNumTwo, mathOperators[randOperator]));

const brainCalc = () => gameEngine(gameRule, gameQuestion, gameAnswer);

export default brainCalc;