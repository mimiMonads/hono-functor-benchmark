import { serve } from "https://deno.land/std@0.159.0/http/server.ts";
import { Hono } from "https://deno.land/x/hono/mod.ts";

const app = new Hono();

app.get("/", (c) => c.text("hello world"));

app.get("/a/b/c/d/e/f/g/", (c) => {
  return c.text("hello world2");
});
app.get("/test/:u", (c) => {
  return c.text(c.req.param("u"));
});

app.get("/test/mul/:a/:b/:c", (c) => {
  return c.text(c.req.param("a") + c.req.param("b") +c.req.param("c"));
});

app.get("/q", (c) => {
  return c.text(c.req.query("d") || "");
});

app.get("/multi", (c) => {
  return c.text((c.req.query("d") || "") + (c.req.query("e") || "") + (c.req.query("f") || ""));
});

app.get("/test/both/:a", (c) => {
  return c.text(c.req.param("a") + " " + (c.req.query("d") || ""));
});

app.get("/both/test/:q/:w/:e", (c) => {
  return c.text(c.req.param("q") + c.req.param("w") +c.req.param("e") + (c.req.query("d") || "") + (c.req.query("e") || "") + (c.req.query("f") || "") + c.req.queries("a"));
});



await serve((req) => app.fetch(req), {
  port: 8080,
  hostname: "127.0.0.1",
});

