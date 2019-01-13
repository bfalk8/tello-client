interface TakeOffCommand {
	event: 'takeoff';
	params: undefined;
}

interface LandCommand {
	event: 'land';
	params: undefined;
}

interface EmergencyCommand {
	event: 'emergency';
	params: undefined;
}

interface DistanceCommand {
	event: 'up' | 'down' | 'left' | 'right' | 'forward' | 'back';
	params: {
		distance: number;
	};
}

type FlipDirection = 'l' | 'r' | 'f' | 'b';

interface FlipCommand {
	event: 'flip';
	params: {
		direction: FlipDirection;
	};
}

export type SocketCommand = TakeOffCommand | LandCommand | EmergencyCommand | DistanceCommand | FlipCommand;
export default SocketCommand;
