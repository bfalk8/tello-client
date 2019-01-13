import {
	SocketCommand,
	getTakeOffCommand,
	getLandCommand,
	getEmergencyCommand,
	getUpCommand,
	getDownCommand,
	getLeftCommand,
	getRightCommand,
	getForwardCommand,
	getBackCommand,
	getFlipCommand,
	FlipDirection,
} from './SocketCommands';
import socketClient from 'socket.io-client';

const getSocketAddress = () => `http://${window.location.hostname}:5000`

export const socket = socketClient(getSocketAddress());

const emitCommand = (command: SocketCommand) => {
	socket.emit('tellocommand', command);
};

export const sendTakeOffCommand = () => emitCommand(getTakeOffCommand());
export const sendLandCommand = () => emitCommand(getLandCommand());
export const sendOHFUCK = () => emitCommand(getEmergencyCommand());
export const sendUpCommand = (distance: number) => emitCommand(getUpCommand(distance));
export const sendDownCommand = (distance: number) => emitCommand(getDownCommand(distance));
export const sendLeftCommand = (distance: number) => emitCommand(getLeftCommand(distance));
export const sendRightCommand = (distance: number) => emitCommand(getRightCommand(distance));
export const sendForwardCommand = (distance: number) => emitCommand(getForwardCommand(distance));
export const sendBackCommand = (distance: number) => emitCommand(getBackCommand(distance));
export const sendFlipCommand = (direction: FlipDirection) => emitCommand(getFlipCommand(direction));

export default socket;
