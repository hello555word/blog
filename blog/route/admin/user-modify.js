
const { User } = require('../../model/user')


const bcrypt = require('bcryptjs')

//修改功能
module.exports = async (req, res, next) => {
    // res.send('ok');测试

    // const body = req.body;
    const { username, email, role, state, password } = req.body
    const id = req.query.id;

    let user = await User.findOne({ _id: id })

    // const isValid = await bcrypt.compare(req.body.password, user.password);
    const isValid = await bcrypt.compare(password, user.password);
    if (isValid) {
        // res.send('密码比对成功') 测试
        // User.updateOne({_id:id},{
        //     username:req.body.username,
        //     email: req.body.email,
        //     role: req.body.role,
        //     state: req.body.state,
        // })
      await  User.updateOne({ _id: id }, {
            username: username,
            email: email,
            role: role,
            state: state,
        })

        res.redirect('/admin/user');

    } else {

        let obj = { path:'/admin/user-edit', message: '密码比对失败。不能进行用户信息修改', id: id }
        next(JSON.stringify(obj));
    }
}