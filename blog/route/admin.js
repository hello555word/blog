// 引入框架
const express = require ('express');
// 创建展示页面的路由
const admin =express.Router();

admin.get('/login',(req,res)=>{
    // res.send('欢迎到博客的登录页面')
    // console.log(req);
      
    res.render('admin/login')
})

admin.post('')
// 用户列表路由
admin.post('/admin/login',(req,res)=>{
  res.render(req)
    
})

admin.get('/user',(req,res)=>{
    res.render('admin/user.art')
})

module.exports=admin;