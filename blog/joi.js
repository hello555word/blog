const Joi = require('joi')

// 定义验证规则
const schema = {

    username: Joi.string().min(3).max(5).required().error(new Error('username属性没有通过验证')),
    password: Joi.string().regex(/^[a-zA-Z0-9]{3-30}$/),


}

async function run() {

    try {
        // 实施验证


        await Joi.validate({
            username: 'bb',
            


        }, schema)

    } catch (er) {
        console.log(er.message);
        return;
    }
    console.log('验证通过');


}

run()