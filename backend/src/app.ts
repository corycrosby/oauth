import Koa from "koa";
import parser from "koa-bodyparser";
import router from "./routes";
import { seedDb } from "./database";

const app = new Koa();

app.use(parser());
app.use(router.routes());

export default function startServer() {
  const APP_PORT = process.env.APP_PORT;

  try {
    seedDb();
    
    app.listen(APP_PORT, () => {
      console.log(`Koa listening on ${APP_PORT}`);
    });
  } catch (err) {
    console.error(`Connection error: ${err}`);
  }
}
