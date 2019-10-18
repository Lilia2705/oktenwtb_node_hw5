const dataBase = require('../../dataBase').getInstance();
const {tokinizer} = require('../../helpers');

module.exports =  (req, res) => {
    try {
        const user = req.user;
        const tokens = tokinizer(user);
        res.json(tokens)

    } catch (e) {
        res.json('NO NO NO').status(403)
    }
}