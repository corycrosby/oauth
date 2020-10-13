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
    app.listen(process.env.APP_PORT, () => {
      console.log(`Koa listening on ${process.env.APP_PORT}`);
    });
  } catch (err) {
    console.error(`Connection error: ${err}`);
  }
}
