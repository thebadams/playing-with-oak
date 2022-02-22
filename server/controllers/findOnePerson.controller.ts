import { Context, helpers } from "../../deps.ts";
import personCollection from "../../mongodb/person.ts";
import { findAllPeople } from "./findAllPeople.controller.ts";
export async function findOnePerson(ctx: Context) {
  const { getQuery } = helpers;

  const query = getQuery(ctx);
	console.log(query)
  if(Object.keys(query).length === 0) {
		return findAllPeople(ctx)
	}
  try {
    const person = await personCollection.findOne(query);
    if (person) {
      ctx.response.status = 200;
      ctx.response.body = {
        success: true,
        message: "Person Found",
        data: person,
      };
    }
  } catch (error) {
    if (error) {
      ctx.response.status = 500;
      ctx.response.body = {
        success: false,
        message: "There was an error",
        data: error,
      };
    }
  }
}
