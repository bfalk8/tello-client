import React, { Component } from 'react';
import { TelloControls } from './components/TelloControls';
import {Grid, } from '@material-ui/core';
import { TelloAppBar } from './components/TelloAppBar';

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
      <Grid spacing={24}>
        <Grid xs={12}>
          <TelloAppBar />
        </Grid>
        <Grid xs={12}>
          <TelloControls />
        </Grid>
			</Grid>
		);
	}
}

export default TelloApp;
