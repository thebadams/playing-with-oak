import { MongoClient } from "../deps.ts";

const client = new MongoClient();

await client.connect("mongodb://127.0.0.1:27017");

const db = client.database("deno");

export default db;
