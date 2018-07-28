'use strict';

/**
 * @param {Egg.Application} app - egg application
 */
module.exports = app => {
  const { router, controller } = app;
  //测试传入整型参数的方法
  router.get('/', controller.home.index);
  //测试map为空的方法
  router.get('/classInfo', controller.classinfo.test);
  //测试map为四个参数的方法
  router.get('/userTeacher', controller.userteacher.test);
};
