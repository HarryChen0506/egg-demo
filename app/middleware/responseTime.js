// 中间件 responseTime

module.exports = (options, app) => {
  return async function responseTime(ctx, next) {
    const start = Date.now();
    // 注意，和 generator function 格式的中间件不同，此时 next 是一个方法，必须要调用它
    await next();
    const delta = Math.ceil(Date.now() - start);
    ctx.set('x-response-time', delta + 'ms');
  };
}