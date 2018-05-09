'use strict';

/**
 * @param {Egg.Application} app - egg application
 */
module.exports = app => {
  const { router, controller } = app;

  router.get('/', controller.home.index);
  router.get('/user', controller.user.info);
  router.get('/user/:id', controller.user.index);
  router.get('/about', controller.about.index);
  router.get('/login', controller.login.index);
  router.get('/login/success', controller.login.success);
  router.resources('posts','/api/posts', controller.posts);
  router.resources('posts_new','/api/posts/new', controller.posts.new);
  router.redirect('/demo', '/user', 302);  //重定向

};
