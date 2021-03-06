// 应用层基础配置

'use strict';

module.exports = appInfo => {
  const config = exports = {};

  // use for cookie sign key, should change to your own and keep security
  config.keys = appInfo.name + '_1525662722825_2118';

  // add your config here
  config.middleware = [
    'robot','accessLogger','responseTime','errorHandler'
  ];
 
  // 开启view引擎
  config.view = {
    defaultViewEngine: 'nunjucks',
    mapping: {
      '.tpl': 'nunjucks',
    },
  };

  // session配置
  config.session = {
    key: 'VERSA_SESSION', // 承载 Session 的 Cookie 键值对名字
    maxAge: 24 * 3600 * 1000, // Session 的最大有效时间
    httpOnly: true,
    encrypt: true, //加密
  };

  //  security 重定向主域白名单
  // 若用户没有配置 domainWhiteList 或者 domainWhiteList数组内为空，则默认会对所有跳转请求放行
  config.security = {
    domainWhiteList:['.versa-ai.com'],  // 安全白名单，以 . 开头 
  };
  
  // news服务api配置
  config.about = {
    pageSize: 5,
    serverUrl: 'https://www.tking.cn/showapi/pub/site/3101/discovery',
  };

  // robot中间件配置
  config.robot = {
    ua: [
      /Baiduspider/i,
    ]
  };

  // accessLogger中间件配置
  config.accessLogger = {
    path: 'logs/access.log',  //存储位置
    console: false, //控制台是否输出
  }

  // 只对指定路径进行异常中间件处理
  config.errorHandler = {
    match: '/api',
  }

  return config;
};
