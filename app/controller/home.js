'use strict';

const Controller = require('egg').Controller;


var nzd_config_test = require("../nzd_services/userServices_opt.js");
const nzd=require('node-zookeeper-dubbo');
const opt=nzd_config_test.userServices_opt;
//为opt赋值
opt.java = require('js-to-java');
//定义dubbo对象
var Dubbo=new nzd(opt);

Dubbo.on('service: changed', (event) => {
    console.log(event);
});





class HomeController extends Controller {

  async index() {
    //根据id获取数据

      let result = await Dubbo.IUserService.selectTest(1);

      this.ctx.body = result;

  }


}

module.exports = HomeController;
