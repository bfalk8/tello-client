import React from 'react';
import {
	sendTakeOffCommand,
	sendLandCommand,
	sendOHFUCK,
	sendUpCommand,
	sendForwardCommand,
	sendDownCommand,
	sendLeftCommand,
	sendRightCommand,
	sendBackCommand,
  sendFlipCommand,
} from './../../socket/socket';
import { Button, Grid, IconButton } from '@material-ui/core';
import {
	ArrowUpwardRounded,
	ArrowDownwardRounded,
	ArrowBackRounded,
	ArrowForwardRounded,
	ArrowDropUp,
	ArrowDropDown,
  FlightTakeoff,
  FlightLand,
  Error,
  Redo,
  Undo,
} from '@material-ui/icons';

interface TelloControlsState {
	upDistance: number;
	downDistance: number;
	leftDistance: number;
	rightDistance: number;
	forwardDistance: number;
	backDistance: number;
}

export class TelloControls extends React.Component<{}, TelloControlsState> {
	constructor(props: {}) {
		super(props);
		this.state = {
			upDistance: 50,
			downDistance: 50,
			leftDistance: 50,
			rightDistance: 50,
			forwardDistance: 50,
			backDistance: 50,
		};
	}
	handleTakeOffClick = (e: React.MouseEvent) => sendTakeOffCommand();
	handleLandClick = (e: React.MouseEvent) => sendLandCommand();
	handleOhFuckClick = (e: React.MouseEvent) => sendOHFUCK();
	handleUpClick = (e: React.MouseEvent) => sendUpCommand(this.state.upDistance);
	handleDownClick = (e: React.MouseEvent) => sendDownCommand(this.state.downDistance);
	handleLeftClick = (e: React.MouseEvent) => sendLeftCommand(this.state.leftDistance);
	handleRightClick = (e: React.MouseEvent) => sendRightCommand(this.state.rightDistance);
	handleForwardClick = (e: React.MouseEvent) => sendForwardCommand(this.state.forwardDistance);
	handleBackClick = (e: React.MouseEvent) => sendBackCommand(this.state.backDistance);
	handleFlipLeftClick = (e: React.MouseEvent) => sendFlipCommand('l');
	handleFlipRightClick = (e: React.MouseEvent) => sendFlipCommand('r');

	render() {
		return (
			<div>
				<Grid xs={12}>
					<IconButton onClick={this.handleTakeOffClick}>
						<FlightTakeoff />
					</IconButton>
					{/* <Button onClick={this.handleTakeOffClick}>Take Off</Button> */}
					<IconButton onClick={this.handleLandClick}>
						<FlightLand />
					</IconButton>
					{/* <Button variant="contained" color="primary" onClick={this.handleLandClick}>
						Land
					</Button> */}
					<IconButton onClick={this.handleOhFuckClick}>
						<Error />
					</IconButton>
					{/* <Button variant="contained" color="primary" onClick={this.handleOhFuckClick}>
						OH FUCK!
					</Button> */}
				</Grid>
				<Grid xs={12}>
					<IconButton onClick={this.handleForwardClick}>
						<ArrowUpwardRounded />
					</IconButton>
					<IconButton onClick={this.handleBackClick}>
						<ArrowDownwardRounded />
					</IconButton>
					<IconButton onClick={this.handleLeftClick}>
						<ArrowBackRounded />
					</IconButton>
					<IconButton onClick={this.handleRightClick}>
						<ArrowForwardRounded />
					</IconButton>
					<IconButton onClick={this.handleUpClick}>
						<ArrowDropUp />
					</IconButton>
					<IconButton onClick={this.handleDownClick}>
						<ArrowDropDown />
					</IconButton>
				</Grid>
        <Grid>
					<IconButton onClick={this.handleFlipLeftClick}>
						<Undo />
					</IconButton>
					<IconButton onClick={this.handleFlipRightClick}>
						<Redo />
					</IconButton>
        </Grid>
			</div>
		);
	}
}

export default TelloControls;
