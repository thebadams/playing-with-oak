import { MongoClient, dotenv } from "../deps.ts";

const client = new MongoClient();

const uri = Deno.env.get('MONGO_URI')
console.log(uri)
if(typeof uri === 'string') {
	await client.connect(uri);
}

const datbase = Deno.env.get('MONGODB_NAME');

const db = client.database(Deno.env.get('MONGODB_NAME'));
console.log(datbase);
export default db;
