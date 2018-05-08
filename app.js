/**
 * 框架提供了统一的入口文件（app.js）进行启动过程自定义
 */

module.exports = app => {
    app.beforeStart(async () => {
        // 应用会等待这个函数执行完成才启动
        // app.cities = await app.curl('http://example.com/city.json', {
        //     method: 'GET',
        //     dataType: 'json',
        // });
        // 也可以通过以下方式来调用 Service
        const ctx = app.createAnonymousContext();
        // app.cities = await ctx.service.cities.load();
    });
    app.once('server', server => {
    // websocket
    });
    app.on('error', (err, ctx) => {
    // report error
    });
    app.on('request', ctx => {
    // log receive request
    // console.log('request', ctx)
    });
    app.on('response', ctx => {
    // ctx.starttime is set by framework
    const used = Date.now() - ctx.starttime;
    // log total cost
    });
};
