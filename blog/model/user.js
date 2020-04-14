// 创建用户集合

const mongoose = require('mongoose');
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
role:{                          //角色
    type:String,
    role:true ,
},
state:{
    type:Number,
    default:0                   //0是启用状态 1是关闭状态
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

// 将用户集合作为模块成员进行导出
module.exports={
    User:User,
}