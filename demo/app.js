const Koa = require("koa");
const app = new Koa();
const views = require("koa-views");
const json = require("koa-json");
const onerror = require("koa-onerror");
const bodyparser = require("koa-bodyparser");
const logger = require("koa-logger");
// const cross = require('./plugins/cross')
const index = require("./routes/index");
const users = require("./routes/users");
const cors = require("@koa/cors");
const jwt = require("jsonwebtoken");
const config = require("./config");
// error handler
onerror(app);

// middlewares
app.use(
  bodyparser({
    enableTypes: ["json", "form", "text"]
  })
);
app.use(json());
// 跨域中间件
app.use(cors());
app.use(logger());
app.use(require("koa-static")(__dirname + "/public"));

app.use(
  views(__dirname + "/views", {
    extension: "pug"
  })
);

// logger
app.use(async (ctx, next) => {
  const start = new Date();
  console.log(ctx.request.body);
  await next();
  const ms = new Date() - start;
  console.log(`${ctx.method} ${ctx.url} - ${ms}ms`);
});

app.use(
  (() => {
    const whiteListUrl = {
      get: ["/index", "/index/string"],
      post: ["/index/login"]
    };
    const hasOneOf = (str, arr) => arr.some(item => item.includes(str));

    return async (ctx, next) => {
      let { method, path } = ctx;
      let _method = method.toLowerCase();
      if (whiteListUrl[_method] && hasOneOf(path, whiteListUrl[_method])) {
        await next();
      } else {
        const token = ctx.headers.authorization;
        if (!token) {
          ctx.status = 401;
          ctx.body = "there is no token, please login";
        } else {
          try {
            await new Promise((resolve, reject) => {
              jwt.verify(token, config.TOEKN_SIGN, (err, decode) => {
                // console.log(err, decode);
                if (err) {
                  reject(err);
                } else {
                  ctx.userInfo = decode.userInfo;
                  resolve();
                }
              });
            });
          } catch (error) {
            ctx.status = 401;
            ctx.body = {
              code: 401,
              message: "token error",
              data: {}
            };
            return
          }
          await next();
        }
      }
    };
  })()
);

// routes
app.use(index.routes(), index.allowedMethods());
app.use(users.routes(), users.allowedMethods());

// error-handling
app.on("error", (err, ctx) => {
  console.error("server error", err, ctx);
});

module.exports = app;
