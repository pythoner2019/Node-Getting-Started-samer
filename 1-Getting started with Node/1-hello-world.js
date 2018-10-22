const http = require('http');

const server = http.createServer((req, res) => {
	res.end(`Hello world\t nice to meet you`);
})


server.listen(9000, () => {
	console.log(`server is working...`)
})






