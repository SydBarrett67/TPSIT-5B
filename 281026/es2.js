/*

Creare due div (uno rosso e uno blu) che vengono collocati casualmente ciascuno 
con un contatore di click indipendente.
Possono incrementare il contatore dell'oggetto rosso solo i client identificati
come dispari e quello blu solo i pari.

*/

const PORT = 5000;
const express = require('express');

const server = express()
	.use((req, res) => res.sendFile('/index.html', { root: __dirname}))
	.listen(PORT, () => console.log('Listening on ' + PORT);

const ws_server = new Server({ server });

server.listen(PORT);

ws_server.on('connection', (ws) => {
	console.log('New client connected!');

	ws.on('close', () => console.log('Client has disconnected'));
});

// --------------------------------

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

}
