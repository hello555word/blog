// 导入 express框架
const express = require('express');

// 引入express - session
const session = require('express-session')

// 引入body-parser 用来处理post
const bodyParser = require('body-parser')

// 创建网站
const app = express();
require('./model/connect');

// require('./model/user.js')  //测试代码
// 处理路径
const path = require('path');
// path.join(__dirname,'public')

// 处理post请求
                                //    flase 用querysting    true 用 qs
app.use(bodyParser.urlencoded({extended:false}))

app.use(session({
    secret:'secret key',       // 设置session
    saveUninitialized:false, //删除后不保存cookie 
    cookie:{
        maxAge:24*24*60*60*1000  //有效时间
    }
}))

// 设置模板路径
app.set('views', path.join(__dirname, 'views'))
    // 设置模板后缀
app.set('view engine', 'art');
// 设置模板引擎
app.engine('art', require('express-art-template'));

// 开放所有静态资源文件
app.use(express.static(path.join(__dirname, 'public')))

// 引入路由路径
const home = require('./route/home.js');
const admin = require('./route/admin.js');

// 中间件拦截判断
app.use('/admin',require('./middleware/loginGuard'))
// 匹配路由
app.use('/admin', admin);
app.use('/home', home);



app.listen(80, "127.0.0.1");
console.log('网站服务器启动成功，请访问localhost');