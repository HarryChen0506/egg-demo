'use strict';

const Controller = require('egg').Controller;

class UserController extends Controller {
    async info(){
        this.ctx.type = 'json'
        this.ctx.body = {
            name: 'harry'
        }
    }
}

module.exports = UserController;