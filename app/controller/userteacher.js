'use strict';

const Controller = require('egg').Controller;



var nzd_config_test = require("../nzd_services/userTeacherServices_opt.js");
const nzd=require('node-zookeeper-dubbo');
const opt=nzd_config_test.userTeacherServices_opt;
//为opt赋值
opt.java = require('js-to-java');
//定义dubbo对象
var Dubbo=new nzd(opt);

Dubbo.on('service: changed', (event) => {
    console.log(event);
});






class UserTeacherController extends Controller {

    /*获取map方法，请求参数为map对象,查询参数需要多个值字符串需要传引号，整型不需要传引号
    * 分别为：
    * siid:7910001
    * ciid:001
    * thcourses:全部
     * PageNow:0
     * */
    async test() {
        //根据id获取数据
        let map = {};
        map['siid']='7910001';
        map['ciid']='001';
        map['thcourses']='全部';
        map['PageNow']=0;
        let result = await Dubbo.UserTeacherService.selectByPrimaryKey(map);
        this.ctx.body = result;

    }
}

module.exports = UserTeacherController;
