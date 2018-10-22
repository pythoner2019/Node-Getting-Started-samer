/*
console.log('Current user is', process.env.USER);


console.log('\nscript executed with: ');

console.log('VAL1 equalt to: ', process.env.VAL1)
console.log('VAL2 equalt to: ', process.env.VAL2)

export VAL1 = 9000

node -p "process.argv" hello 42


$node
process
	>stdout
	>stdin
	>sterr


process.stdout.write('hello');


process.stdin.on('readable', () => {
	const chunk = process.stdin.read();
	if (chunck !== null) {
		process.stdout.write(chunk);
	}
});

*/

process.stdin.on('readable', () => {
	const chunk = process.stdin.read();
	if (chunk !== null) {
		process.stdout.write(chunk);
	}
});
