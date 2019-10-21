const dataBase = require('../../database').getInstance();

module.exports = async (path, house_id) => {
    const housePhoto = dataBase.getModel('housePhoto');

    await housePhoto.create({
        house_id,
        path
    });
}