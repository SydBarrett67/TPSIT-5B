const express = require('express');

const server = express()
	.use((req, res) => res.sendFile('/index.html', { root: __dirname}))
	.listen(3000, () => console.log('Listening on ' + 3000);

const ws_server = new Server({ server });

ws_server.on('connection', (ws) => {
	console.log('New client connected!');

	ws.on('close', () => console.log('Client has disconnected'));
});

const PORT = 5000;
server.listen(PORT);

let data = [];
let index = 0;

setInterval(() => {
	for (let i=0;i<5;i++) {
		if (i==index) data[i] = 1;
		else data[i] = 0;
	}
	index = (index + 1) % data.length;

	ws_server.clients.forEach((client) => {
		client.send(data);
	});

}, TIME);
