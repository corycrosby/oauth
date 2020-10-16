import Koa from "koa";
import Router from "@koa/router";
import { pool } from "../database"
import { queryAllUsers, getUserById, addUser } from "../database/users.queries"

const usersRouter = new Router();

usersRouter.get("/", async (ctx: Koa.Context) => {
  return ctx.body = await queryAllUsers.run(undefined, pool)
});

usersRouter.get("/:id", async (ctx: Koa.Context) => {
  return ctx.body = await getUserById.run({ userId: ctx.params.id }, pool)
});

usersRouter.post("/", async (ctx: Koa.Context) => {
  const name = ctx.request.body.name;
  return ctx.body = await addUser.run({ userName: name }, pool)
});

export default usersRouter;
