/* eslint-disable */
const express = require('express');
// const multer = require('multer');
// const update = multer({
//   dest: './tmp',
// });
const userController = require('./controllers/user');
//创建erpress实例
const server = express();

// 中间件的使用和配置
server.use(express.json());
server.use(express.urlencoded({ extended: true }));
// server.use(express.static('public'))
server.use((req, res, next) => {
  res.set('Access-Control-Allow-Origin', '*');
  res.set('Access-Control-Allow-Headers', 'content-type');
  next();
});

//路由设置

server.post('/register', userController.postRegister); //注册
server.post('/sign-in', userController.postLogin); //登录
// server.post('/user/profile', update.single('avatar'), userController.postChgAvatar); //修改头像

server.listen(8080);
