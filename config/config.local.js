'use strict';
// 只在开发环境下使用，覆盖默认  only read at development mode, will override default
module.exports = appInfo => {
  const config = exports = {};

  // bodyParser配置项
  config.bodyParser ={
    jsonLimit: '100kb',  // 不得大于100kb
    formLimit: '100kb',
  },

  // robot中间件配置
  config.robot = {
    ua: [
      /googlespider/i,
    ]
  };

  // 开发环境关闭CSRF，可以用postman模拟请求
  config.security = {
    csrf: {
      enable: true
      // ignore: ctx => isInnerIp(ctx.ip), //判断是否是内部ip
    }
  }

  return config;
};
