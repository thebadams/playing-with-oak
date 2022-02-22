import { Context } from '../../deps.ts';
import personCollection from '../../mongodb/person.ts'
export async function createPerson(ctx: Context) {
	const body = ctx.request.body()
	if(!ctx.request.hasBody) {
		ctx.response.status = 404
		ctx.response.body = {
			success: false,
			message: "No data provided"
		}
	}
	try {
		const {name, age} = await body.value
		const person = await personCollection.insertOne({name, age});
		ctx.response.body = {
			success: true,
			message: "Successfully Added A Person",
			person
		}
	} catch (error) {
		if(error) {
			ctx.response.body = null;
			ctx.response.status = 500;
		}
	}
	
}