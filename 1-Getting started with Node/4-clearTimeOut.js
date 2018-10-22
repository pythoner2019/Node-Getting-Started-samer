const timerId = setTimeout(() => {
	console.log('you will not see this')
}, 0)


clearTimeout(timerId);
