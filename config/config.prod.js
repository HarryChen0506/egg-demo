'use strict';
const path = require('path');

// 只在生产环境下使用，覆盖默认  only read at production mode, will override default
module.exports = appInfo => {
    const config = exports = {};

    // robot中间件配置
    config.robot = {
        ua: [
            /googlespider/i,
        ]
    };

    // 日志目录
    config.logger= {
        dir: path.join(appInfo.baseDir, 'logs'),
    }

    return config;
};
