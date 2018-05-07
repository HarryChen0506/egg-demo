'use strict';
// 只在开发环境下使用，覆盖默认  only read at development mode, will override default
module.exports = appInfo => {
  const config = exports = {};

  // robot中间件配置
  config.robot = {
    ua: [
      /googlespider/i,
    ]
  };

  return config;
};
