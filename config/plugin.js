'use strict';

// had enabled by egg
// exports.static = true;

// 开启view模板引擎
exports.nunjucks = {
  enable: true,
  package: 'egg-view-nunjucks'
};

// 开启请求参数校验
exports.validate = {
  enable: true,
  package: 'egg-validate',
};

// 开启日志分割
exports.logrotator = {
  enable: true,
  package: 'egg-logrotator',
  filesRotateByHour: [],           // list of files that will be rotated by hour
};

