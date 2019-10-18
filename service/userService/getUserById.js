const dataBase  = require('../../dataBase').getInstance();

module.exports = async id => {
    const UserModel = dataBase.getModel('user');
    const user = await UserModel.findByPk(id);

    if (!user) {
        throw new Error('There is not this user in base');
    }
    return user
}