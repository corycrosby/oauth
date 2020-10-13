import Koa from "koa";
import Router from "@koa/router";

const app = new Koa();
const router = new Router();

app.use(router.routes());

router.get("/", (ctx: Koa.Context) => {
  return (ctx.body = "GET ROOT");
});

export default function startServer() {
  try {
    app.listen(3030, () => {
      console.log("Koa listening on 3030");
    });
  } catch (err) {
    console.error(`Connection error: ${err}`);
  }
}
