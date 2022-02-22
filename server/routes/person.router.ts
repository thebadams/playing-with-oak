import { Router } from '../../deps.ts';
import {createPerson} from '../controllers/createPerson.controller.ts'
const personRouter = new Router();

personRouter
	.post('/person', createPerson);

export {personRouter};