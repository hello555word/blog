// 引入框架 第三方
const express = require('express');
// 引入hash加密  第三方
// const bcrypt = require('bcryptjs')  


// 导入数据库的用户集合的构造函数
// const { User } = require('../model/user');
//  console.log(User);

// 创建展示页面的路由
const admin = express.Router();

// 渲染登录页面
admin.get('/login', require('./admin/loginPage'))


// 用户列表路由   获取form表单的post数据需要用第三方模块  下载 body-parser
// 登录功能
admin.post('/login', require('./admin/login'))

// 渲染用户列表页面
admin.get('/user', require('./admin/userPage'))

// 退出登录功能
admin.get('/logout', require('./admin/logout'))

// 创建用户编辑页面
admin.get('/user-edit', require('./admin/user-edit.js'))

// 实现用户添加功能
admin.post('/user-edit',require('./admin/user-edit-fn.js'))

  module.exports = admin;