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

const ws = new Server({ server });

server.listen(PORT);

ws.on('connection', (ws) => {
	console.log('New client connected!');

	ws.on('close', () => console.log('Client has disconnected'));
});

// --------------------------------

ws.on('message', (data) => {
    console.log('Message received');
    const data = JSON.parse(data);
}









