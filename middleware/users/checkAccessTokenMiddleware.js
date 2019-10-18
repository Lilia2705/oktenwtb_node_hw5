const verifyToken = require('../../helpers')

module.exports = (req, res, next) =>{
    try {
        const token = req.get('Authorization');

        if(!token){
            throw new Error('NO Token')

        }

        const userFromToken = verifyToken(token);

        if (!userFromToken) {
            throw new Error('There isn\'t such user in database')
        }

        req.user = userFromToken;

        next();
    } catch (e) {
        res.status(403).json(e.message)
    }
}