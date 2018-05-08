'use strict';

const Controller = require('egg').Controller;

class UserController extends Controller {

    async index(){       
        const { id } = this.ctx.params;
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