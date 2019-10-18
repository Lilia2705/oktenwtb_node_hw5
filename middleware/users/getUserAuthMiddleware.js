const {userService} = require('../../service');

module.exports = async (req, res, next) =>{
    const {email, password} = req.body;
    const user = await userService.getUserByParams(email, password)

    if (!user){
    next (new Error('Not present'))
}

    req.user = user;
    next()
}