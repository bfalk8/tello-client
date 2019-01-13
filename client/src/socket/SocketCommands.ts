export type SocketCommand = TakeOffCommand | LandCommand | EmergencyCommand | DistanceCommand | FlipCommand;

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

export type FlipDirection = 'l' | 'r' | 'f' | 'b';

interface FlipCommand {
	event: 'flip';
	params: {
		direction: FlipDirection;
	};
}

export const getTakeOffCommand = (): TakeOffCommand => ({
	event: 'takeoff',
	params: undefined,
});

export const getLandCommand = (): LandCommand => ({
	event: 'land',
	params: undefined,
});

export const getEmergencyCommand = (): EmergencyCommand => ({
	event: 'emergency',
	params: undefined,
});

export const getUpCommand = (distance: number): DistanceCommand => ({
	event: 'up',
	params: {
		distance,
	},
});

export const getDownCommand = (distance: number): DistanceCommand => ({
	event: 'down',
	params: {
		distance,
	},
});

export const getLeftCommand = (distance: number): DistanceCommand => ({
	event: 'left',
	params: {
		distance,
	},
});

export const getRightCommand = (distance: number): DistanceCommand => ({
	event: 'right',
	params: {
		distance,
	},
});

export const getForwardCommand = (distance: number): DistanceCommand => ({
	event: 'forward',
	params: {
		distance,
	},
});

export const getBackCommand = (distance: number): DistanceCommand => ({
	event: 'back',
	params: {
		distance,
	},
});

export const getFlipCommand = (direction: FlipDirection): FlipCommand => ({
	event: 'flip',
	params: {
		direction,
	},
});
