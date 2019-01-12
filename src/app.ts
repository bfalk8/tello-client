import express from 'express';
import path from 'path';
export const app = express();

// Static file declaration
app.use(express.static(path.join(__dirname, 'client/build')));

// production mode
if (process.env.NODE_ENV === 'production') {
	app.use(express.static(path.join(__dirname, 'client/build')));
	//
	app.get('*', (req, res) => {
		res.sendfile(path.join((__dirname = 'client/build/index.html')));
	});
}
// build mode
app.get('*', (req, res) => {
	res.sendFile(path.join(`${__dirname}/client/public/index.html`));
});

export default app;