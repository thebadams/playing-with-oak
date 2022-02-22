import { Context } from "../../deps.ts";
import peopleCollection from "../../mongodb/person.ts";
export async function helloWorld(ctx: Context) {
  const personId = await peopleCollection.insertOne({
		name: "Brian",
		age: 30
	})

	ctx.response.body = personId
}
