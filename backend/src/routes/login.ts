import Koa from "koa";
import Router from "@koa/router";
import fetch from "node-fetch";

const loginRouter = new Router();

const CLIENT_ID = process.env.CLIENT_ID;
const CLIENT_SECRET = process.env.CLIENT_SECRET;


loginRouter.get("/github", (ctx: Koa.Context) => {
  const redirectUrl = "http://localhost:3030/login/github/callback";
  const url = `https://github.com/login/oauth/authorize?client_id=${CLIENT_ID}&redirect_uri=${redirectUrl}`;

  // Send Github the CLIENT_ID inexchange for a single use code
  ctx.redirect(url);
});

loginRouter.get("/github/callback", async (ctx: Koa.Context) => {
  const code = ctx.request.query.code;
  const url = `https://github.com/login/oauth/access_token?client_id=${CLIENT_ID}&client_secret=${CLIENT_SECRET}&code=${code}`;

  // Send code to Github to receive a user access_token
  const responseWithToken = await fetch(url, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
  }).then((res) => res.text());

  const params = new URLSearchParams(responseWithToken);
  const token = params.get("access_token");

  // Send the access_token to the Github api to get the user information
  const responseWithUser = await fetch("https://api.github.com/user", {
    headers: { Authorization: `token ${token}` },
  }).then((res) => res.json());

  // Take the user information and hit the server's addUser endpoint
  await fetch(`http://localhost:${process.env.SERVER_PORT}/api/users`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ 
      name: responseWithUser.name, 
      email: responseWithUser.email 
    })
  }).then((res) => res.text());

  // Redirect the user back to the login page 
  ctx.redirect("http://localhost:3000/login")
});

export default loginRouter;
