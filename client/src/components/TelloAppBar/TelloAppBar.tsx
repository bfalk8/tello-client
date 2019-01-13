import React from 'react';
import style from './TelloAppBar.module.scss';
import { AppBar, Typography } from '@material-ui/core';

export class TelloAppBar extends React.Component {
	render() {
		return (
			<AppBar className={style.container} position="static">
				<Typography variant="h6" color="inherit">
					Tello
				</Typography>
			</AppBar>
		);
	}
}

export default TelloAppBar;