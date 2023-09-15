"use strict";

function solveEquation(a, b, c) {
	const discriminant = Math.pow(b, 2) - 4 * a * c;
	if (discriminant > 0) {
		const x1 = (-b + Math.sqrt(discriminant)) / (2 * a);
		const x2 = (-b - Math.sqrt(discriminant)) / (2 * a);
		return [x1, x2];
	} else if (discriminant === 0) {
		const x = -b / (2 * a);
		return [x];
	} else {
		return [];
	}
}


function calculateTotalMortgage(percent, contribution, amount, countMonths) {
	if (isNaN(percent) || isNaN(contribution) || isNaN(amount) || isNaN(countMonths)) {
		return false;
	}

	percent = percent / 100 / 12;

	let loanBody = amount - contribution;
	let monthlyPayment = loanBody * (percent + (percent / ((Math.pow((1 + percent), countMonths)) - 1)));
	let totalPayment = monthlyPayment * countMonths;

	totalPayment = Number(totalPayment.toFixed(2));

	return totalPayment;
}


let totalPayment = calculateTotalMortgage(10, 0, 50000, 12)

console.log(totalPayment)

function summElementsWorker(secondArray) {
	let sum = secondArray.reduce((accumulator, currentValue) => {
		return accumulator + currentValue;
	}, 0);

	return sum;
}

let secondArray = [3, 5, 22, 56, 87, 43, 1, 0];
/*console.log(summElementsWorker(secondArray));*/

function differenceMaxMinWorker(secondArray) {
	let max = Math.max(...secondArray);
	let min = Math.min(...secondArray);
	let difference = max - min;
	return difference;
}
/*console.log(differenceMaxMinWorker(secondArray));*/

function differenceEvenOddWorker(secondArray) {
	let evenElement = [];
	let oddElement = [];
	for (let i = 0; i < secondArray.length; i++) {
		if (secondArray[i] % 2 === 0) {
			evenElement.push(secondArray[i]);
		} else oddElement.push(secondArray[i]);

	}
	let sumEvenElement = evenElement.reduce((accumulator, currentValue) => {
		return accumulator + currentValue;
	}, 0);
	let sumOddElement = oddElement.reduce((accumulator, currentValue) => {
		return accumulator + currentValue;
	}, 0);
	let minus = sumEvenElement - sumOddElement;

	return minus;
}

/*console.log(differenceEvenOddWorker(secondArray));*/

function averageEvenElementsWorker(secondArray) {
	let evenElement = [];
	let oddElement = [];
	for (let i = 0; i < secondArray.length; i++) {
		if (secondArray[i] % 2 === 0) {
			evenElement.push(secondArray[i]);
		} else oddElement.push(secondArray[i]);
	}

	let sumEvenElement = evenElement.reduce((accumulator, currentValue) => {
		return accumulator + currentValue;
	}, 0);

	let countEvenElement = evenElement.length;
	console.log(countEvenElement);
	let average = sumEvenElement / countEvenElement;

	return average;
}
/*console.log(averageEvenElementsWorker(secondArray));*/

function makeWork(arrOfArr, func) {
	let newArr = [];
	for (let i = 0; i < arrOfArr.length; i++) {
		newArr.push(func(arrOfArr[i]));
	}
	return Math.max(...newArr);
}
const arr = [
	[10, 10, 11, 20, 10],
	[67, 10, 2, 39, 88],
	[72, 75, 51, 87, 43],
	[30, 41, 55, 96, 62]
];
console.log(makeWork(arr, summElementsWorker)); // максимум из 61, 206, 328, 284 => 328
console.log(makeWork(arr, differenceMaxMinWorker)); // максимум из 10, 86, 44, 66 => 86
console.log(makeWork(arr, differenceEvenOddWorker)); // максимум из 39, -6, -184, 92 => 92
console.log(makeWork(arr, averageEvenElementsWorker)); // максимум из 12.5, 33.333, 72, 62.666 => 72

