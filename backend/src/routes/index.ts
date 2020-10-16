import Koa from "koa";
import Router from "@koa/router";

import loginRouter from "./login";
import usersRouter from "./users";

const router = new Router({ prefix: "/api"});

router.get("/", (ctx: Koa.Context) => {
  return (ctx.body = "GET API ROOT");
});

router.use("/login", loginRouter.routes());
router.use("/users", usersRouter.routes());

export default router;
