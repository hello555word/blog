// 引入框架
const express = require ('express');
// 创建展示页面的路由
const admin =express.Router();

admin.get('/login',(req,res)=>{
    // res.send('欢迎到博客的登录页面')
    // console.log(req);
      
    res.render('admin/login')
})


// 用户列表路由   获取form表单的post数据需要用第三方模块  下载 body-parser
admin.post('/login',(req,res)=>{
  
  // res.send(req.body)

  const {email , password}=req.body;
  // 如果客户没有输入邮箱地址
  if ( email.trim().length == 0 || password.trim().length == 0){

    // return res.status(400).send('<h4>邮件地址错误或者密码错误</h4>');

    // return;

    return res.status(400).render('admin/error' , {msg:'邮件地址错误或者密码错误'});

  }


    
})

admin.get('/user',(req,res)=>{
    res.render('admin/user.art')
})

module.exports=admin;