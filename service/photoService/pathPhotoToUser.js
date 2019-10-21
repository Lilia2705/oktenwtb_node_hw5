const dataBase = require('../../database').getInstance();

module.exports = async (path, user_id) => {
    const usersPhoto = dataBase.getModel('usersPhoto');

    await usersPhoto.create({
        user_id,
        path
    });
};