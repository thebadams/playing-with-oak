import { Bson } from "../deps.ts";
import db from "./db.ts";

interface PersonSchema {
  _id: Bson.ObjectId;
  name: string;
  age: number;
}

const personCollection = db.collection<PersonSchema>("people");

export default personCollection;
