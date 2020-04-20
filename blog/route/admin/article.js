module.exports=(req,res)=>{
    // 标识  当前的链接是文章页面
    req.app.locals.currentLink = 'article'
    res.render('admin/article.art')

}