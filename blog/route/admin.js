// 引入框架 第三方
const express = require('express');
// 引入hash加密  第三方
// const bcrypt = require('bcryptjs')  


// 导入数据库的用户集合的构造函数
// const { User } = require('../model/user');
//  console.log(User);

// 创建展示页面的路由
const admin = express.Router();

admin.get('/login', (req, res) => {
  // res.send('欢迎到博客的登录页面')
  // console.log(req);

  res.render('admin/login')
})


// 用户列表路由   获取form表单的post数据需要用第三方模块  下载 body-parser
// 登录功能
admin.post('/login', require('./admin/login'))

admin.get('/user', (req, res) => {
  res.render('admin/user.art',
  // {
  //   msg:req.session.username     用app.locals.info抛出
  // }
  )
})

module.exports = admin;