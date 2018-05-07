'use strict';

const Controller = require('egg').Controller;

class HomeController extends Controller {
  async index() {
    // console.log('context', this)
    this.ctx.body = 'hi, Harry';
  }
}

module.exports = HomeController;
