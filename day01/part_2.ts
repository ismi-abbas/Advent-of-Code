import fs from 'node:fs';

let inputData: string[] = [];

const content = fs.readFileSync('input.txt', 'utf-8');
const data = content
	.split('\n')
	.map(line => line.trim())
	.filter(line => line !== '');

inputData.push(...data);

let total = 0;
const numbersInString: string[] = ['one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine'];

for (let i = 0; i < inputData.length; i++) {
	const numbers = searchNumber(inputData[i]);

	total += numbers;
}

function searchNumber(input: string): number {
	const matchFirst = input.match(/\d|one|two|three|four|five|six|seven|eight|nine/);
	const matchLast = input.match(/.*(\d|one|two|three|four|five|six|seven|eight|nine)/);

	if (!matchFirst || !matchLast) {
		return 0;
	}

	let first = matchFirst[0];
	let last = matchLast[1];

	if (isNaN(Number(first))) {
		first = (numbersInString.indexOf(first) + 1).toString();
	}

	if (isNaN(Number(last))) {
		last = (numbersInString.indexOf(last) + 1).toString();
	}

	return parseInt(first.concat(last));
}

console.log(total);
