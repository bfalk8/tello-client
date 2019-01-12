import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { Observable } from 'rxjs';
import { hello } from './observables/TelloMessages';
import { TestSocket } from './components/TestSocket';
import { TelloCommands } from './components/TelloCommands';

interface AppState {
	msg: string;
}

class App extends Component<{}, AppState> {
	private rx: Observable<any>;
	constructor(props: any) {
		super(props);
		this.rx = hello;
		this.state = { msg: 'hey' };
	}
	componentDidMount() {
		this.rx.subscribe(msg => {
			this.setState({ msg });
		});
	}

	render() {
		return (
			<div className="App">
				<header className="App-header">
					<img src={logo} className="App-logo" alt="logo" />
					<p>
						Edit <code>src/App.tsx</code> and save to reload.
					</p>
					<a className="App-link" href="https://reactjs.org" target="_blank" rel="noopener noreferrer">
						Learn React
					</a>
					{this.state.msg}
				</header>
				<TestSocket />
        <TelloCommands />
			</div>
		);
	}
}

export default App;
