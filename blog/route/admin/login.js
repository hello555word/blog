
// 登录功能
const { User } = require('../../model/user');
const bcrypt = require('bcryptjs')  

const login = async (req, res) => {

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
        let isValid = await bcrypt.compare(password, user.password);

        if (isValid) {

            req.session.username = user.username;
            // res.send('登录成功')

            // app.locals 可以抛向模板
            req.app.locals.userInfo = user;
            // 重定向
            res.redirect('../admin/user')




        } else {
            res.status(400).render('admin/error', { msg: '邮件地址错误或者密码错误' });
        }

    } else {
        res.status(400).render('admin/error', { msg: '邮件地址错误或者密码错误' });
    }

}
module.exports=login;