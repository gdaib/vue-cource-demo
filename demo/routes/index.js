const router = require("koa-router")();
const { TOEKN_SIGN, expireTime } = require("../config");
const jwt = require("jsonwebtoken");

router.prefix("/index");

router.get("/", async (ctx, next) => {
  await ctx.render("index", {
    title: "Hello Koa 2!"
  });
});

router.get("/string", async (ctx, next) => {
  ctx.body = "koa2 string";
});

router.get("/json", async (ctx, next) => {
  ctx.body = {
    title: "koa2 json"
  };
});

router.get("/getUserInfo", async (ctx, next) => {
  ctx.body = {
    name: "cjfff",
    age: 18
  };
});

router.post("/getUserInfo", async (ctx, next) => {
  console.log(ctx.request.body);
  ctx.body = {
    code: 0,
    data: {}
  };
});

const getPasswordByName = userName => {
  const userInfoMap = {
    cjf: {
      userName: "cjf",
      password: "abcd1234"
    }
  };
  return userInfoMap[userName];
};

router.post("/login", async (ctx, next) => {
  const { userName, password } = ctx.request.body;
  if (userName) {
    const userInfo = password ? getPasswordByName(userName) : "";
    if (!userInfo || !password || userInfo.password !== password) {
      ctx.status = 401;
      ctx.body = {
        code: 401,
        message: "user name or password is wrong",
        data: {}
      };
    } else {
      const token = jwt.sign({ userInfo }, TOEKN_SIGN, {
        expiresIn: expireTime
      });
      ctx.cookies.set(TOEKN_SIGN, token);
      ctx.body = {
        code: 0,
        message: "success",
        data: {
          token
        }
      };
    }
  } else {
    ctx.status = 401;
    ctx.body = {
      code: 401,
      message: "user name is empty",
      data: {}
    };
  }
});

module.exports = router;
