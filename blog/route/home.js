// 引用expess框架
const express = require('express');
// 创建博客展示页面路由
const home = express.Router();

home.get('/', require('./home/index'))

home.get('/article',require('./home/article'))


// 将路由对象做为模块成员进行导出
module.exports = home;