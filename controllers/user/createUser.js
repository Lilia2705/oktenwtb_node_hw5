const {usersService} = require('../../service')

module.exports = async (req, res) => {
    try {
        const userToCreate = req.body;

        await usersService.create(userToCreate);

        res.redirect('users')
    }
    catch (e) {
        res.json(e.message);
    }
};