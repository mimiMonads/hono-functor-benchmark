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
        path: "/test/:a",
        f: (f) => f.param.a,
      },
      {
        path: "/test/mul/:a/:b/:c",
        f: (f) => f.param.a + f.param.b + f.param.c,
      },
      {
        path: "/q",
        query: {
          only: ["d"]
        },
        f: (f) => (f.query?.d || "/q"),
      },
      {
        path: "/multi",
        query: {
          only: ["d","e","f"]
        },
        f: (f) => (f.query?.d || "q") + (f.query?.e || "q") + (f.query?.f || "q"),
      },
      {
        path: "/test/both/:a",
        query: {
          only: ["d"]
        },
        f: (f) => f.param.a + " " + (f.query?.d || "/test/both/:id"),
      },
      {
        path: "/both/test/:a/:b/:c",
        query: {
          only: ["d","e","f"]
        },
        f: (f) => f.param.a + f.param.b + f.param.c + (f.query?.d || "q") + (f.query?.e || "q") + (f.query?.f || "q"),
      },

    ],
  ),
  { port: 8080, hostname: "127.0.0.1" },
);
