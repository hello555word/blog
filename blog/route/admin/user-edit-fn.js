
// const Joi = require('joi')
const { User, validateUser } = require('../../model/user')

const bcrypt = require('bcryptjs')

module.exports = async (req, res, next) => {
    // res.send('ok')测试
    // 第三方 joi 验证器 下载

    // res.send(req.body)
    // 定义验证规则
    // const schema = {
    //     username: Joi.string().min(3).max(30).required().error(new Error('用户名不符合验证规则')),
    //     email: Joi.string().email().required().error(new Error('邮箱不符合规则')),
    //     password: Joi.string().regex(/^[a-zA-Z0-9]{3,30}$/).required().error(new Error('密码不符合验证规则')),
    //     role: Joi.string().valid('normal', 'admin').required().error(new Error('角色不符合验证规则')),
    //     state: Joi.string().valid('0', '1').required().error(new Error('状态值不符合验证规则')),
    // }

    // 实施验证
    try {
        // 实施验证
        // await Joi.validate(req.body, schema)
        await validateUser(req.body)

    } catch (e) {
        // console.log(e.message);

        // return res.redirect(`/admin/user-edit?message=${e.message}`)

        return next(JSON.stringify({ path: '/admin/user-edit', message :e.message}))
    }



    let user = await User.findOne({ email: req.body.email });

    if (user) {
        // return res.redirect(`/admin/user-edit?message=邮箱地址被占用`)
        return next(JSON.stringify({ path: '/admin/user-edit', message: '邮箱地址被占用' }))
    }

    const salt = await bcrypt.genSalt(10)
    const password = await bcrypt.hash(req.body.password, salt)
    // 替换密码
    req.body.password = password

    // res.send(req.body)

    await User.create(req.body)

    res.redirect('/admin/user')


}