import { Application } from '../deps.ts';


const app = new Application();

app.use((ctx => {
	ctx.response.body = 'Hello World!';
}));

export { app }

