import Koa from "koa";
import parser from "koa-bodyparser";
import router from "./routes";
import { seedDb } from "./database";

const app = new Koa();

app.use(parser());
app.use(router.routes());

export default function startServer() {
  const SERVER_PORT = process.env.SERVER_PORT;

  try {
    seedDb();
    
    app.listen(SERVER_PORT, () => {
      console.log(`Koa listening on ${SERVER_PORT}`);
    });
  } catch (err) {
    console.error(`Connection error: ${err}`);
  }
}
