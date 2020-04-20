// 创建用户集合

const mongoose = require('mongoose');
const Joi = require('joi')
// hash加密
const bcrypt = require('bcryptjs');


// 创建集合规则
const articleSchema = new mongoose.Schema({
    title: {
        type: String,
        maxlength: 30,
        minlength: 4,
        required: [true, '请填写标题']
    },
    author: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: [true, '请填作者']
    },
    publishDate: {
        type: Date,
        default: Date.now,
    },
    cover: {
        type: String,
        default: null
    },
    content: {
        type: String
    }
})
const Article = mongoose.model( 'Article');

module.exports={

    Article: Article

}