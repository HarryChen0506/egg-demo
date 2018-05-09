// 应用层基础配置

'use strict';

module.exports = appInfo => {
  const config = exports = {};

  // use for cookie sign key, should change to your own and keep security
  config.keys = appInfo.name + '_1525662722825_2118';

  // add your config here
  config.middleware = [
    'robot','responseTime'
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
    maxAge: 86400000, // Session 的最大有效时间
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

  return config;
};
