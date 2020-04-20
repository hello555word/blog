
const { User } = require('../../model/user')

// 渲染列表页面

module.exports = async (req, res) => {
    // 标识  当前的链接是用户页面
    req.app.locals.currentLink='user'

    // 接受客户端传过来的当前页的参数
    let page = req.query.page || 1;
    // 每页显示条数
    let pagesize = 5;
    // 查询用户总数
    let count = await User.countDocuments({});
    // 总条数
    let total = Math.ceil(count / pagesize);

   
    // 页码对应的开始位置
    let start = (page - 1) * pagesize;

 
    // 将用户从数据库查出来
    let users = await User.find({}).limit(pagesize).skip(start)




    res.render('admin/user.art',
        // {
        //   msg:req.session.username     用app.locals.info抛出
        // }
        {
            users: users,
            page:page,
            total:total
        }
    )
}