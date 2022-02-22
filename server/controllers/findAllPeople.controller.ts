import { Context } from "../../deps.ts";
import personCollection from "../../mongodb/person.ts";
export async function findAllPeople(ctx: Context) {
  try {
    const data = await personCollection.find({}).toArray();

    if (data) {
      ctx.response.body = data;
      ctx.response.status = 200;
    }
  } catch (error) {
    ctx.response.body = "not found";
    ctx.response.status = 204;
  }
}
