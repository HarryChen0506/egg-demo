'use strict';

const Controller = require('egg').Controller;

class AboutController extends Controller {
  async index() {
      
    // console.log('helper', this.ctx.helper)

    const ctx = this.ctx;
    const page = ctx.query.page || 1;
    const ticketList = await ctx.service.about.list(page);
    await ctx.render('about/index.tpl', { list: ticketList, testTime: 1525679684727});
  }
}

module.exports = AboutController;
