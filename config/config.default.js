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
  
  // news服务配置
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
