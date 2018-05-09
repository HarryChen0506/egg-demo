'use strict';

const Controller = require('egg').Controller;

class UserController extends Controller {

    async index(){          
        console.log('request', this.ctx.request.ip)       
        this.ctx.body = `Hello,123`;
        // this.ctx.status = 202   
    }
    async create(){
        const createRule = {
            name: { 
                required : false, //默认为true
                type: 'string' 
            },
            age: {
                type: 'string'
            }
        };
        // 校验参数
        console.log('ctx',this.ctx.validate)
        this.ctx.validate(createRule);        
        this.ctx.type = 'json'; 
        this.ctx.status = 201       
        this.ctx.body = {
            result: this.ctx.request.body
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