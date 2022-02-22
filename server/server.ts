import { Application } from "../deps.ts";
import { homeRouter } from "./routes/home.router.ts";
import {personRouter} from "./routes/person.router.ts";
const app = new Application();

// app.use((ctx) => {
//   ctx.response.body = "Hello World!";
// });

app.use(homeRouter.routes());
app.use(homeRouter.allowedMethods());
app.use(personRouter.routes());
app.use(personRouter.allowedMethods());
export { app };
