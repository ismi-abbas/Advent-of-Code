import fs from 'node:fs';

const input = fs.readFileSync('input.txt', 'utf-8');

const sample = `Game 1: 3 blue, 4 red; 1 red, 2 green, 6 blue; 2 green
Game 2: 1 blue, 2 green; 3 green, 4 blue, 1 red; 1 green, 1 blue
Game 3: 8 green, 6 blue, 20 red; 5 blue, 4 red, 13 green; 5 green, 1 red
Game 4: 1 green, 3 red, 6 blue; 3 green, 6 red; 3 green, 15 blue, 14 red
Game 5: 6 red, 1 blue, 3 green; 2 blue, 1 red, 2 green`;

const allPowers: number[] = [];

input.split('\n').forEach(line => {
	let possible = {
		red: 0,
		blue: 0,
		green: 0,
	};
	let power = 0;

	line
		.split(':')[1]
		.trim()
		.split(';')
		.forEach(line => {
			line
				.split(',')
				.map(entry => entry.trim().split(' '))
				.forEach(([count, color]) => {
					possible[color] = Math.max(possible[color], parseInt(count));
				});
		});
	power = possible.green * possible.blue * possible.red;
	allPowers.push(power);
});

console.log(allPowers.reduce((acc, power) => acc + power, 0));
