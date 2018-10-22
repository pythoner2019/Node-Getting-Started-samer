setTimeout(() => {
	process.exit()
}, 3000)


process.on('exit', () => {
	console.log('process will exit now');
});


console.log('Hello');



