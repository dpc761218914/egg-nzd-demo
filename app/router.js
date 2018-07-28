'use strict';

/**
 * @param {Egg.Application} app - egg application
 */
module.exports = app => {
  const { router, controller } = app;
  router.get('/', controller.home.index);
  router.get('/classInfo', controller.classinfo.test);
  router.get('/userTeacher', controller.userteacher.test);
};
