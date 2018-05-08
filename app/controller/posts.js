'use strict';

const Controller = require('egg').Controller;

class UserController extends Controller {

    async index(){               
        this.ctx.body = `Hello,123`;
    }
    async create(){
        const createRule = {
            name: { 
                required : false, //默认为true
                type: 'string' 
            },
            age: {
                type: 'number'
            }
        };
        // 校验参数
        // console.log('ctx',this.ctx.validate)
        this.ctx.validate(createRule);
        this.ctx.type = 'json'
        this.ctx.body = {
            result: true
        }
    }
    async new(){
        this.ctx.type = 'json'
        this.ctx.body = {
            name: 'new'
        }
    }
   
}

module.exports = UserController;