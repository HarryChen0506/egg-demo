'use strict';

const Controller = require('egg').Controller;

class UserController extends Controller {

    async index(){       
        const { id } = this.ctx.params;       
        // queries 当前查询参数 包括数组
        console.log('queries',this.ctx.queries)
        // ctx.cookies get/set 设置cookie
        let count = this.ctx.cookies.get('count');
        count = count?Number(count):0;
        this.ctx.cookies.set('count',++count);
        this.ctx.body = `Hello, ${id}`;
    }
    async info(){     
        const user = {
            name: 'harry',
            age: 30,
            phone: 13512341234,
            score: 99
        }
        // console.log('env',this.app.config.env) // 'local'
        this.ctx.type = 'json'
        this.ctx.body = this.ctx.helper.formatUser(user)
    }
}

module.exports = UserController;