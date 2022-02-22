import { Router } from "../../deps.ts";
import { createPerson } from "../controllers/createPerson.controller.ts";

import {findAllPeople} from '../controllers/findAllPeople.controller.ts';
import {findOnePerson} from '../controllers/findOnePerson.controller.ts';
const personRouter = new Router();

personRouter
	.get('/people', findAllPeople)
	.get('/person', findOnePerson)
  .post("/person", createPerson);

export { personRouter };
