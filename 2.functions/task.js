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


