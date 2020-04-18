
const Joi = require('joi')

module.exports = async (req, res) => {
    // res.send('ok')测试
    // 第三方 joi 验证器 下载

    // res.send(req.body)
    // 定义验证规则
    const schema = {
        username: Joi.string().min(3).max(30).required().error(new Error('用户名不符合验证规则')),
        email: Joi.string().email().required().error(new Error('邮箱不符合规则')),
        password: Joi.string().regex(/^[a-zA-Z0-9]{3-30}$/).required().error(new Error('密码不符合验证规则')),
        role: Joi.string().valid('normal', 'admin').required().error(new Error('角色不符合验证规则')),
        state: Joi.string().valid('0', '1').required().error(new Error('状态值不符合验证规则')),
    }

    // 实施验证
    try {
        // 实施验证
        await Joi.validate( req.body, schema)

    } catch (e) {
        // console.log(e.message);
        res.redirect(`/admin/user-edit?message=${e.message}`)
    
    }
    res.send(req.body)
    console.log('验证通过');
}