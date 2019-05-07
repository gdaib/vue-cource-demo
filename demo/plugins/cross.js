module.exports = options => {
  // const defaults = {
  //   allowMethods: "GET,HEAD,PUT,POST,DELETE,PATCH"
  // };

  // options = Object.assign({}, defaults, options);

  // if (Array.isArray(options.exposeHeaders)) {
  //   options.exposeHeaders = options.exposeHeaders.join(",");
  // }

  // if (Array.isArray(options.allowMethods)) {
  //   options.allowMethods = options.allowMethods.join(",");
  // }

  // if (Array.isArray(options.allowHeaders)) {
  //   options.allowHeaders = options.allowHeaders.join(",");
  // }

  // if (options.maxAge) {
  //   options.maxAge = String(options.maxAge);
  // }

  // options.credentials = !!options.credentials;

  // options.keepHeadersOnError = options.keepHeadersOnError === undefined || !!options.keepHeadersOnError;

  return async function cross(ctx, next) {
    // const requestOrigin = ctx.get("Origin");

    // if (!requestOrigin) return await next();

    // if (ctx.method !== 'OPTIONS') {

    // }

    ctx.set("Access-Control-Allow-Origin", "*");
    ctx.set(
      "Access-Control-Allow-Headers",
      // "X-Requested-With,Content-Type"
      "Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With"
    );
    ctx.set("Access-Control-Allow-Methods", "PUT,POST,GET,DELETE,OPTIONS");

    if (ctx.method == "OPTIONS") {
      return 
    }
    await next();
  };
};
