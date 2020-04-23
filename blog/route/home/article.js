const { Article } = require('../../model/article.js')


module.exports = async (req, res) => {
    // res.send('欢迎来到博客详情页面')
    const id = req.query.id;

    let article = await  Article.findOne({ _id: id }).populate('author');

    res.render('home/article.art', {
        article: article
    })
}
