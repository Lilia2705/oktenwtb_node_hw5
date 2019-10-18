const dataBase = require('../../dataBase').getInstance();


module.exports = async (whereObject, updateObject) => {
    const HouseModel = dataBase.getModel('house');

    await HouseModel.update(updateObject, {
        where: whereObject
    })
}