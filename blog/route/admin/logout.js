
// 退出登录功能
module.exports = (req, res) => {
    console.log(req.url);
    
    // 删除session
    req.session.destroy(function () {
        // 删除cookie
        res.clearCookie('connect.sid');
        // 重定向到用户登录界面
        res.redirect('./admin/login')

    })
}