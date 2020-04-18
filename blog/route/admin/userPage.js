
const { User } = require('../../model/user')



// 渲染列表页面

module.exports = async (req, res) => {

    // 将用户从数据库查出来
    let users = await User.find({})




    res.render('admin/user.art',
        // {
        //   msg:req.session.username     用app.locals.info抛出
        // }
        {
            users:users
        }
    )
}