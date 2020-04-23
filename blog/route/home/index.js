const {Article} = require('../../model/article.js')
const         pagination=    require('mongoose-sex-page')        
module.exports = async (req, res) => {
    // res.send('欢迎来到博客首页面')
    let page=req.query.page
    let result = await pagination(Article).page(page).size(4).display(5).find().populate('author').exec();

    res.render('home/default.art',
    {
        result
    })

}
