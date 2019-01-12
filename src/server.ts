import http from 'http';
import app from './app';
import { TelloSocket } from './TelloSocket';

const port = process.env.PORT || 5000;
const server = http.createServer(app);
const socket = new TelloSocket(server);


// start server
server.listen(port, () => {
	console.log(`server listening on port: ${port}`);
});
