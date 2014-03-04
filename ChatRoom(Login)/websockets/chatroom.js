// broadcast incoming message to all client
function receiveMessage(data, socket) {
	socket.broadcase.emit('message', data);
}
