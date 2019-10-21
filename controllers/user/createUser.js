const {usersService} = require('../../service')

module.exports = async (req, res) => {
    try {
        const userToCreate = req.body;

        const {id: user_id} =  await usersService.create(userToCreate);

        res.redirect('users')
    }
    catch (e) {
        res.json(e.message);
    }
};
