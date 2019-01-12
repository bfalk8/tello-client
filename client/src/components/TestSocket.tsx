import React from 'react';
import { hello } from '../observables/TelloMessages';

export class TestSocket extends React.Component {
	componentDidMount() {
		hello.subscribe((msg: any) => console.warn(msg));
	}
	render() {
		return <div>blah</div>;
	}
}
