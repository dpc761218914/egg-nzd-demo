/**
 * 功能： nzd与java同行的node模块
 * 作者： dpc
 * 日期： 2018/6/27.
 */
//引入nzd配置
var nzd_config = require("../../config/nzd_config.js");

var userServices_opt={
    application:{name:nzd_config.application},
    register:nzd_config.register,
    dubboVer:nzd_config.dubboVer,
    root:nzd_config.root,
    dependencies:{
        IUserService:{
            interface:'com.jzy.edu.exam.service.AreasService',
            timeout:6000,
            version:'v1.0.0',
            group:'kjb',
            methodSignature: {
                selectTest:(id)=>[{'$class': 'java.lang.Integer','$' :id}],
            }
        },
    }
};

exports.userServices_opt=userServices_opt;



