'use strict';

const Controller = require('egg').Controller;

class PostsController extends Controller {

    async index(){          
        // 查看客户端IP 
        // console.log('request', this.ctx.request.ip)       
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
                type: 'number'
            }
        };
        // 校验参数
        // console.log('ctx',this.ctx.validate)
        try {
            this.ctx.validate(createRule);   
        } catch (err){
            console.log('error-1', err);
            this.ctx.logger.warn(err.errors);
            this.ctx.body = {
                success: false,
                msg: 'params validate fail'
            }
            return 
        }             
        // this.ctx.type = 'json'; 
        this.ctx.status = 200       
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

module.exports = PostsController;