const dataBase = require('../../dataBase').getInstance()

module.exports = async objectToSearch => {
   const userModel = dataBase.getModel('user');

   const user = await userModel.findOne({
       where: objectToSearch
   })
    return user && user.dataValues;
}