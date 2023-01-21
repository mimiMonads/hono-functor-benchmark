import fun from "https://deno.land/x/endofunctor/fun.ts";
import { serve } from "https://deno.land/std@0.159.0/http/server.ts";

await serve(
  fun(
    { hasName: "http://127.0.0.1:8080/" },
  )(
    [
      { type: "response", path: "/", r: (_) => new Response("hello world") },
      {
        type: "response",
        path: "/a/b/c/d/e/f/g/",
        r: (_) => new Response("hello world2"),
      },
      {
        path: "/test/:id",
        f: (f) => f.param.id,
      },
      {
        path: "/test",
        f: (f) => (f.query?.hello || "/test"),
      },
      {
        path: "/test/both/:id",
        f: (f) => f.param.id + " " + (f.query?.hello || "/test/both/:id"),
      },
      {
        path: "/test/mul/:a/:b/:c",
        f: (f) => f.param.b,
      },
      {
        path: "/q",
        f: (f) => (f.query?.e || "q"),
      },
      {
        path: "/json",
        f: async (_) => await Deno.readTextFile("./people.json"),
      },
    ],
  ),
  { port: 8080, hostname: "127.0.0.1" },
);
