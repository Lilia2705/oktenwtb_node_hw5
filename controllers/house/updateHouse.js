const {housesService} = require('../../service');
const {usersValidator} = require('../../validators');

module.exports = async (req, res) => {
    try {
        const HouseObject = req.body;
        const {house_id} = req.params;
        const userIdFromToken = req.user;
        const {user_id} = req.house;

        usersValidator.userIdFromTokenValidator(user_id, userIdFromToken);
        await housesService.update (HouseObject, house_id)

        res.redirect(`/houses/${house_id}`);

    } catch (e) {
        res.json(e.message);
    }
};