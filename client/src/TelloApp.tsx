import React, { Component } from 'react';
import { TelloCommands } from './components/TelloCommands';

interface AppState {
	msg: string;
}

class TelloApp extends Component<{}, AppState> {
	constructor(props: any) {
		super(props);
		this.state = { msg: 'hey' };
	}

	render() {
		return (
      <div>
        <TelloCommands />
			</div>
		);
	}
}

export default TelloApp;
