
//二进制文件上传功能让
const formidable = require('formidable')
const path = require('path')

module.exports = (req, res) => {

    // 1 创建表单解析对象
    const form = new formidable.IncomingForm();

    // 2配置上传文件的存放位置
    form.uploadDir = path.join(__dirname, '../', '../', 'public', 'uploads')

    // 3 保留上传文件的后缀
    form.keepExtensions = true;

    //4 解析表单
    form.parse(req, (error, fields, files) => {
        //error 错误对象
        //    fields 对象类型保存普通表单数据
        //    field 对象类型保存和上传文件相关数据

        // res.send(fields)
    });

}