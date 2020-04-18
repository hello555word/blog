// 创建用户集合

const mongoose = require('mongoose');
const Joi = require('joi')
// hash加密
const bcrypt = require('bcryptjs');


// 创建集合规则
const userSchema = new mongoose.Schema({
    username: {             // 用户名
        type: String,          //类型
        required: true,    //必填
        minlength: 2,         //最小长度
        maxlength: 20,       //最大长度
    },
    email: {                  //邮箱
        type: String,          //类型
        unique: true,             //不重复
    },
    password: {       //密码
        type: String,       //字符串类型
        required: true,      //必填
    },
    role: {                          //角色
        type: String,
        role: true,
    },
    state: {
        type: Number,
        default: 0                   //0是启用状态 1是关闭状态
    }

})


// 创建结合、
const User = mongoose.model('User', userSchema);
// User.create({  //测试代码啊
//     username:'iteheima',
//     email:'iteheima@itcast.cn',

//     password:'123456',

//     role:'admin', 
//     state:0
// }).then(()=>{
//     console.log('创建成功');

// }).catch(()=>{
//     console.log('创建失败');

// })
// async function createUser() {

//     const salt = await bcrypt.genSalt(10)
//     const pass = await bcrypt.hash('123456', salt)
//     const user = await User.create({  //测试代码啊
//         username: 'lichangying',
//         email: '285777553@qq.com',
//         password: pass,
//         role: 'admin',
//         state: 0
//     }).then(() => {
//         console.log('创建成功');

//     }).catch(() => {
//         console.log('创建失败');

//     })
// }
// createUser()
// 将用户集合作为模块成员进行导出

const validateUser = async (user) => {
    const schema = {
        username: Joi.string().min(3).max(30).required().error(new Error('用户名不符合验证规则')),
        email: Joi.string().email().required().error(new Error('邮箱不符合规则')),
        password: Joi.string().regex(/^[a-zA-Z0-9]{3,30}$/).required().error(new Error('密码不符合验证规则')),
        role: Joi.string().valid('normal', 'admin').required().error(new Error('角色不符合验证规则')),
        state: Joi.string().valid('0', '1').required().error(new Error('状态值不符合验证规则')),
    }

    return await Joi.validate(user, schema)
}


module.exports = {
    User: User,
    validateUser: validateUser
}