const router = require("koa-router")();
const jwt = require("jsonwebtoken");
const config = require("../config");

router.prefix("/users");

router.get("/", function(ctx, next) {
  ctx.body = "this is a users response!";
});

router.get("/bar", function(ctx, next) {
  ctx.body = "this is a users/bar response";
});

router.get("/authorization", (ctx, next) => {
  const { userInfo } = ctx;
  const token = jwt.sign({ userInfo }, config.TOEKN_SIGN, {
    expiresIn: config.expireTime
  });
  ctx.cookies.set(config.TOEKN_SIGN, token); // 用 cookie 防止跨站脚本攻击
  ctx.body = {
    code: 200,
    message: "success",
    data: {
      token,
      userInfo
    }
  };
});

module.exports = router;
