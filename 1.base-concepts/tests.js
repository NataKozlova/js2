function testCase() {
  const a = 1;
  const b = -3;
  const c = 2;

  const solutions = solveEquation(a, b, c);
  if (solutions[0] === 2 && solutions[1] === 1) {
    console.log("Тест пройден");
  } else {
    console.log("Тест не пройден");
  }
}

testCase();


function testCase() {
	percent = 10;
	contribution = 0;
	amount = 50000;
	countMonths = 12
	let solutions = calculateTotalMortgage(percent, contribution, amount, countMonths);
	if (solutions === 52749.53) {
		console.log("Тест пройден");
	} else {
		console.log("Тест не пройден");
	}
}

testCase();


describe('Домашнее задание к занятию 1. «Основные понятия»', () => {
  describe('Задача №1', () => {
    it('должна возвращать 2 корня уравнения', () => {
      expect(solveEquation(1, 5, 4)).toEqual([-1, -4]);
    });

    it('должна возвращать 1 корень уравнения', () => {
      expect(solveEquation(1, 2, 1)).toEqual([-1]);
    });

    it('должна вернуть пустой массив', () => {
      expect(solveEquation(1, 2, 10)).toEqual([]);
    });
  });

  describe('Задача №2. Функция должна:', () => {
    it('верно считать кредит: кейс #1', () => {
      expect(calculateTotalMortgage(10, 0, 50000, 12)).toEqual(52749.53);
    });

    it('верно считать кредит: кейс #2', () => {
      expect(calculateTotalMortgage(10, 1000, 50000, 12)).toEqual(51694.54);
    });

    it('верно считать кредит: кейс #3', () => {
      expect(calculateTotalMortgage(10, 20000, 20000, 48)).toEqual(0);
    });

    it('верно считать кредит: кейс #4', () => {
      expect(calculateTotalMortgage(10, 0, 10000, 36)).toEqual(11616.19);
    });

    it('верно считать кредит: кейс #5', () => {
      expect(calculateTotalMortgage(15, 0, 10000, 36)).toEqual(12479.52);
    });
  });
});