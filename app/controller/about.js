'use strict';

const Controller = require('egg').Controller;

class AboutController extends Controller {
  async index() {
    const ctx = this.ctx;
    const page = ctx.query.page || 1;
    const ticketList = await ctx.service.about.list(page);
    await ctx.render('about/index.tpl', { list: ticketList });
  }
}

module.exports = AboutController;
