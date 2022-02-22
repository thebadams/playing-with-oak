import { Application } from "../deps.ts";
import { homeRouter } from "./routes/home.router.ts";

const app = new Application();

// app.use((ctx) => {
//   ctx.response.body = "Hello World!";
// });

app.use(homeRouter.routes());
app.use(homeRouter.allowedMethods());

export { app };
