import socketIo from 'socket.io';
import http from 'http';
import TelloServer from '@bfalk8/tello-server';

export class TelloSocket {
	private io: socketIo.Server;
	private tello: TelloServer;
	constructor(server: http.Server) {
		this.io = socketIo(server);
		this.bindEvents();
		this.tello = new TelloServer();
	}

	private bindEvents = () => {
		this.io.on('connection', socket => {
			console.log('new client connected');
			socket.on('disconnect', () => console.log('client disconnected'));
			socket.on('takeoff', (data) => this.tello.control.takeOff());
			socket.on('land', (data) => this.tello.control.land());
		});
	};
}
