import Koa from "koa";
import Router from "@koa/router";
import fetch from "node-fetch";

const app = new Koa();
const router = new Router();

const clientId = process.env.CLIENT_ID;
const clientSecret = process.env.CLIENT_SECRET;

app.use(router.routes());

router.get("/", (ctx: Koa.Context) => {
  return (ctx.body = "GET ROOT");
});

router.get("/login/github", (ctx: Koa.Context) => {
  const redirectUrl = "http://localhost:3030/login/github/callback";
  const url = `https://github.com/login/oauth/authorize?client_id=${clientId}&redirect_uri=${redirectUrl}`;

  ctx.redirect(url);
});

router.get("/login/github/callback", async (ctx: Koa.Context) => {
  const code = ctx.request.query.code;
  const url = `https://github.com/login/oauth/access_token?client_id=${clientId}&client_secret=${clientSecret}&code=${code}`;

  const res = await fetch(url, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
  }).then((response) => response.text());
  const params = new URLSearchParams(res);

  // Save token in database
  const token = params.get("access_token");

  const userUrl = "https://api.github.com/user";
  const req = await fetch(userUrl, {
    headers: { Authorization: `token ${token}` },
  }).then((response) => response.json());

  return (ctx.body = req);
});

export default function startServer() {
  const PORT = process.env.APP_PORT;

  try {
    app.listen(PORT, () => {
      console.log(`Koa listening on ${PORT}`);
    });
  } catch (err) {
    console.error(`Connection error: ${err}`);
  }
}
