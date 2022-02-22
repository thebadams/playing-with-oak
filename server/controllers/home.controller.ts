import { Context } from "../../deps.ts";
export function helloWorld(ctx: Context) {
  ctx.response.body = "Hello World!";
}
