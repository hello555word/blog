const guard = (req, res, next) => {
    // 判断用户访问的是否是登录页面
    // 判断用户的登录状态
    // 如果是登录。请求放行
    // 如果不是登录界面。将请求重定向登录页面
    if (req.url != '/login' && !req.session.username) {
        res.redirect('/admin/login')
    } else {
        next()
    }


}
module.exports=guard