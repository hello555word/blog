


module.exports=(req,res)=>{

const { message }=req.query
    res.render('admin/user-edit.art', {
        message:message
    });



}