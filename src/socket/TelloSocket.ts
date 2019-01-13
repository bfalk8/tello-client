import { SocketCommand } from './SocketCommand';
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
			socket.on('tellocommand', (data) => this.runCommand(data));
		});
	};

	private runCommand = (command: SocketCommand): boolean => {
		switch(command.event) {
			case 'takeoff': return this.tello.control.takeOff();
			case 'land': return this.tello.control.land();
			case 'emergency': return this.tello.control.OHFUCK();
			case 'up': return this.tello.control.up(command.params.distance);
			case 'down': return this.tello.control.down(command.params.distance);
			case 'left': return this.tello.control.left(command.params.distance);
			case 'right': return this.tello.control.right(command.params.distance);
			case 'forward': return this.tello.control.forward(command.params.distance);
			case 'back': return this.tello.control.back(command.params.distance);
			case 'flip': return this.tello.control.flip(command.params.direction);
		}
	};
}
