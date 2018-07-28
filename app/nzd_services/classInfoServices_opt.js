/**
 * 功能： nzd与java同行的node模块
 * 作者： dpc
 * 日期： 2018/6/27.
 */
//引入nzd配置
var nzd_config = require("../../config/nzd_config.js");

var classInfoServices_opt={
    application:{name:nzd_config.application},
    register:nzd_config.register,
    dubboVer:nzd_config.dubboVer,
    root:nzd_config.root,
    dependencies:{
        classInfoService:{
            interface:'com.jzy.edu.exam.service.ClassInfoService',
            timeout:6000,
            methodSignature: {
                /*定义参数为map的参数*/
               selectHeadMaster:(map)=>[{'$class': 'java.util.Map','$' :map}],
            }
        },
    }
};

exports.classInfoServices_opt=classInfoServices_opt;



