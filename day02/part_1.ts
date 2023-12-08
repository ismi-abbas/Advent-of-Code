import fs from 'node:fs';

const input = fs.readFileSync('input.txt', 'utf-8');

const sample = `Game 1: 3 blue, 4 red; 1 red, 2 green, 6 blue; 2 green
Game 2: 1 blue, 2 green; 3 green, 4 blue, 1 red; 1 green, 1 blue
Game 3: 8 green, 6 blue, 20 red; 5 blue, 4 red, 13 green; 5 green, 1 red
Game 4: 1 green, 3 red, 6 blue; 3 green, 6 red; 3 green, 15 blue, 14 red
Game 5: 6 red, 1 blue, 3 green; 2 blue, 1 red, 2 green`;

const games: Record<string, string> = {};

input.split('\n').forEach(line => {
	const [gameId, data] = line.split(':').map(item => item.trim());
	games[gameId] = data;
});

const configuration = new Map<string, number>([
	['red', 12],
	['green', 13],
	['blue', 14],
]);

const possibleGames: number[] = [];

for (const [gameId, data] of Object.entries(games)) {
	let id = gameId.split(' ')[1];
	const exceededLimits = new Set<string>();

	const lines = data.split(';');

	lines.forEach(line => {
		const entries = line.split(',').map(entry => entry.trim().split(' '));
		entries.forEach(([count, color]) => {
			const totalCount = parseInt(count);
			if (totalCount > configuration.get(color)!) {
				exceededLimits.add(id);
			}
		});
	});

	if (exceededLimits.size === 0) {
		possibleGames.push(parseInt(id));
	}
}

console.log(possibleGames.reduce((acc, id) => acc + id, 0));
