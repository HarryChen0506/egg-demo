// about页面的服务

const Service = require('egg').Service;

class AboutService extends Service {
  async list(page = 1) {
    // read config
    const { serverUrl, pageSize } = this.config.about;

    // use build-in http client to GET hacker-news api
    const { data } = await this.ctx.curl(`${serverUrl}`, {
      data: {
        src: 'ios',
        siteCityOID:'3101'
      },
      dataType: 'json',
    });
    // console.log('data', data.result.data)
    return data.result.data;
  }
}

module.exports = AboutService;