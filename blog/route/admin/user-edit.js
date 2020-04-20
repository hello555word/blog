
const { User } = require('../../model/user')

module.exports = async (req, res) => {
    // 标识  当前的链接是用户页面管理页码
    req.app.locals.currentLink = 'user'
    // 获取地址栏的参数
    const { message, id } = req.query;

    if (id) {
// 修改
        let user = await User.findOne({_id: id });
        res.render('admin/user-edit.art', {
            message: message,
            user:user,
            link:'/admin/user-modify?id='+id,
            button:'修改'
        });
    } else {
        res.render('admin/user-edit.art', {
            message: message,
            link: '/admin/user-edit',
            button: '添加'

        });
    }

 
}
