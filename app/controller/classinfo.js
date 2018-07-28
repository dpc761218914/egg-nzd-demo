'use strict';

const Controller = require('egg').Controller;



var nzd_config_test = require("../nzd_services/classInfoServices_opt.js");
const nzd=require('node-zookeeper-dubbo');
const opt=nzd_config_test.classInfoServices_opt;
//为opt赋值
opt.java = require('js-to-java');
//定义dubbo对象
var Dubbo=new nzd(opt);

Dubbo.on('service: changed', (event) => {
    console.log(event);
});






class ClassInfoController extends Controller {

    /*获取map方法，请求参数为map对象*/
    async test() {
        //根据id获取数据
        let map = {};
        let  ciId ='ciId';
        map[ciId]='001';
        let result = await Dubbo.classInfoService.selectHeadMaster(map);
        this.ctx.body = result;

    }
}

module.exports = ClassInfoController;
