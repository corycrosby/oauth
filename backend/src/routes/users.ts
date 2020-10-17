import Koa from "koa";
import Router from "@koa/router";
import { pool } from "../database"
import { queryAllUsers, getUserById, addUser } from "../database/users.queries"

const usersRouter = new Router({ prefix: "/users"});

usersRouter.get("/", async (ctx: Koa.Context) => {
  return ctx.body = await queryAllUsers.run(undefined, pool)
});

usersRouter.get("/:id", async (ctx: Koa.Context) => {
  return ctx.body = await getUserById.run({ userId: ctx.params.id }, pool)
});

usersRouter.post("/", async (ctx: Koa.Context) => {
  const {name, email} = ctx.request.body;
  const parameters = { user: { name: name, email: email}}

  return ctx.body = await addUser.run(parameters, pool)
});

export default usersRouter;
