// 引入框架 第三方
const express = require('express');
// 引入hash加密  第三方
const bcrypt = require('bcryptjs')  


// 导入数据库的用户集合的构造函数
const { User } = require('../model/user');
//  console.log(User);

// 创建展示页面的路由
const admin = express.Router();

admin.get('/login', (req, res) => {
  // res.send('欢迎到博客的登录页面')
  // console.log(req);

  res.render('admin/login')
})


// 用户列表路由   获取form表单的post数据需要用第三方模块  下载 body-parser
admin.post('/login', async (req, res) => {
  // res.send(req.body)
  const { email, password } = req.body;
  // 如果客户没有输入邮箱地址
  if (email.trim().length == 0 || password.trim().length == 0) {
    // 直接发到前端页面 
    // return res.status(400).send('<h4>邮件地址错误或者密码错误</h4>');

    // return;
    // 渲染模板
    return res.status(400).render('admin/error', { msg: '邮件地址错误或者密码错误' });

  }
  // 要异步          查询email
  let user = await User.findOne({ email: email })

  if (user) {
    // 加密比对 返回true  flase 
    let isValid= await bcrypt.compare(password, user.password);

    if (isValid) {

      req.session.username= user.username;
      // res.send('登录成功')
      // 重定向
      res.redirect('../admin/user')


    } else {
      res.status(400).render('admin/error', { msg: '邮件地址错误或者密码错误' });
    }

  } else {
    res.status(400).render('admin/error', { msg: '邮件地址错误或者密码错误' });
  }

})

admin.get('/user', (req, res) => {
  res.render('admin/user.art',{
    msg:req.session.username
  })
})

module.exports = admin;