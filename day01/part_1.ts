import fs from 'node:fs';

let inputData: string[] = [];

const content = fs.readFileSync('input.txt', 'utf-8');
const data = content
	.split('\n')
	.map(line => line.trim())
	.filter(line => line !== '');

inputData.push(...data);

let total = 0;

for (let i = 0; i < inputData.length; i++) {
	const numbers = searchNumber(inputData[i]);
	const combine = parseInt(numbers[0].toString().concat(numbers[numbers.length - 1].toString()));

	total += combine;
}

function searchNumber(input: string): number[] {
	const result: number[] = [];

	for (const item of input) {
		if (!isNaN(parseInt(item, 10))) {
			result.push(parseInt(item, 10));
		}
	}

	if (result.length === 1) {
		result.push(result[0]);
	}

	return result;
}

console.log(total);
