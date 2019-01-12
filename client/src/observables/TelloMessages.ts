import { Observable, Observer } from 'rxjs';
import { socket } from '../socket';

export const hello = Observable.create((observer: Observer<string>) => {
	socket.on('hello', (msg: string) => {
		observer.next(msg);
	});
});
