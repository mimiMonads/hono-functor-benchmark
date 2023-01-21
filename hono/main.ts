import { serve } from "https://deno.land/std@0.159.0/http/server.ts";
import { Hono } from "https://deno.land/x/hono/mod.ts";

const app = new Hono();

app.get("/", (c) => c.text("hello world"));
app.get("/a/b/c/d/e/f/g/", (c) => {
  return c.text("hello world");
});
app.get("/test/:id", (c) => {
  return c.text(c.req.param("id"));
});

app.get("/test", (c) => {
  return c.text(c.req.query("hello") || "");
});
app.get("/test/both/:id2", (c) => {
  return c.text(c.req.param("id2") + " " + (c.req.query("hello") || ""));
});

app.get("/test/mul/:a/:b/:c", (c) => {
  return c.text(c.req.param("b"));
});

app.get("/q", (c) => {
  return c.text(c.req.query().e || "");
});
app.get("/json", async (c) => {
  return c.text(await Deno.readTextFile("./people.json"));
});

await serve((req) => app.fetch(req), {
  port: 8080,
  hostname: "127.0.0.1",
});
