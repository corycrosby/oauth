import Koa from "koa";
import Router from "@koa/router";

const loginRouter = new Router();

const clientId = process.env.CLIENT_ID;
const clientSecret = process.env.CLIENT_SECRET;

loginRouter.get("/github", (ctx: Koa.Context) => {
  const redirectUrl = "http://localhost:3030/login/github/callback";
  const url = `https://github.com/login/oauth/authorize?client_id=${clientId}&redirect_uri=${redirectUrl}`;

  ctx.redirect(url);
});

loginRouter.get("/github/callback", async (ctx: Koa.Context) => {
  const code = ctx.request.query.code;
  const url = `https://github.com/login/oauth/access_token?client_id=${clientId}&client_secret=${clientSecret}&code=${code}`;

  const resToken = await fetch(url, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
  }).then((res) => res.text());

  const params = new URLSearchParams(resToken);
  const token = params.get("access_token");

  const resUser = await fetch("https://api.github.com/user", {
    headers: { Authorization: `token ${token}` },
  }).then((res) => res.json());

  return (ctx.body = resUser);
});

export default loginRouter;
