const {housesService} = require('../../service')

module.exports = async (req, res) => {
    try {
        const houseToCreate = req.body;
        const user_id = req.user;

        await housesService.create(houseToCreate, user_id);

        res.redirect('houses');
    }
    catch (e) {
        res.json(e.message);
    }
};