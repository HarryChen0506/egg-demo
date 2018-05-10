import { error } from 'util';

'use strict';

const Controller = require('egg').Controller;

class LoginController extends Controller {
  async index() {
      const { ctx } = this;
      ctx.session = {userId: '1234'};
      ctx.body = `login`

      //http://www.versa-ai.com/
      let res = await ctx.curl(`http://www.versa-ai.com/`);
    
      console.log('res', res)
    
  }
  async success(){
    const { ctx } = this;
    const { userId } = ctx.session;
    console.log('userId', userId)
    ctx.body = `success,${userId}`;
    // ctx.redirect('http://www.baidu.com')  // 不在白名单内，被禁止
    // ctx.redirect('http://www.versa-ai.com') //可以跳转
  }
}

module.exports = LoginController;
