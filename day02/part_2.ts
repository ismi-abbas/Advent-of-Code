import fs from 'node:fs';

let inputData: string[] = [];

const content = fs.readFileSync('input.txt', 'utf-8');
const data = content
	.split('\n')
	.map(line => line.trim())
	.filter(line => line !== '');

inputData.push(...data);
