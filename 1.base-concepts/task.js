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

