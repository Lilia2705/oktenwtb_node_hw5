const {usersService} = require('../../service');
const {usersValidator} = require('../../validators');

module.exports = async (req, res) => {
    try {
        const patchUserObject = req.body;
        const {user_id} = req.params;
        const userIdFromToken = req.user;

        usersValidator.userIdFromTokenValidator(user_id, userIdFromToken)

        await usersService.updateUser(patchUserObject, user_id)

        res.json('OK')
    } catch (e) {
        res.json(e.message);
    }
};