module.exports = (sequelize, DataTypes) => {
    const userPhoto = sequelize.define('userPhoto', {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        user_id: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        path: {
            type: DataTypes.STRING,
            allowNull: false
        },
        tableName: 'user_to_photo',
        timestamps: false
    });

    const user = sequelize.import('./user.js');

    userPhoto.belongsTo(user, {foreignKey: 'user_id'});

    return userPhoto;
}