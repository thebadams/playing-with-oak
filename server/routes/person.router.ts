import { Router } from "../../deps.ts";
import { createPerson } from "../controllers/createPerson.controller.ts";
import {findAllPeople} from "../controllers/findAllPeople.controller.ts"
const personRouter = new Router();

personRouter
	.get('/person', findAllPeople)
  .post("/person", createPerson);

export { personRouter };
