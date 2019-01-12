import React from 'react';
import {socket} from '../socket';

export class TelloCommands extends React.Component {

  handleTakeOffClick = (e: React.MouseEvent) => {
    socket.emit('takeoff');
  }

  handleLandClick = (e: React.MouseEvent) => {
    socket.emit('land');
  }

  render() {
    return (
      <div>
        <button onClick={this.handleTakeOffClick}>Take Off</button>
        <button onClick={this.handleLandClick}>Land</button>
      </div>
    );
  }
}