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


