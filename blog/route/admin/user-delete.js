const { User } = require('../../model/user')

//删除功能

module.exports = async (req, res) => {

    // res.send(req.query.id)

    await User.findOneAndDelete({ _id: req.query.id })
    res.redirect('/admin/user');

}