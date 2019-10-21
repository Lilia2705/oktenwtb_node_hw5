const {housesService} = require('../../service')

module.exports = async (req, res, next) => {
    try {
        const {house_id} = req.params;
        const isHousePresent = await housesService(house_id);

        req.house = isHousePresent.dataValues;

        next();
    } catch (e) {
        res.status(400).json(e.message)
    }
}
