import { Router } from "../../deps.ts";
import { helloWorld } from "../controllers/home.controller.ts";

const homeRouter = new Router();

homeRouter
  .get("/", helloWorld);

export { homeRouter };
