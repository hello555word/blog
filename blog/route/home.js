// 引入框架
const express = require ('express');
// 创建展示页面的路由
const home =express.Router();

home.get('/',(req,res)=>{
    res.send('欢迎到博客的首页页面')
})

module.exports=home;