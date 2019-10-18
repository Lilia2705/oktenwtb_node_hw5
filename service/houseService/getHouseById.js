const dataBase = require('../../database').getInstance();

module.exports = async house_id => {
    const HouseModel = dataBase.getModel('House');

    let house = await HouseModel.findByPk(house_id);

    if (!house) {
        throw new Error('There is not this house in base');
    }

    return house;
};