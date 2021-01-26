import Koa from "koa";
import Router from "@koa/router";

import loginRouter from "./login";
import usersRouter from "./users";

const router = new Router();

router.get("/", (ctx: Koa.Context) => {
  return (ctx.body = "ROOT");
});

router.use("/login", loginRouter.routes());
router.use("/api", usersRouter.routes());

export default router;
