'use strict';

const Controller = require('egg').Controller;

class HomeController extends Controller {
    async index() {
        const { ctx } = this;

        let count = ctx.cookies.get('count');
        ctx.body = count;
        ctx.body = 'hi, egg';

    }
}

module.exports = HomeController;