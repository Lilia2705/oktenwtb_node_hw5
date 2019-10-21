module.exports = (sequelize, DataTypes) => {
    const housePhoto = sequelize.define('housePhoto', {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        house_id: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        path: {
            type: DataTypes.STRING,
            allowNull: false
        },
        tableName: 'house_to_photo',
        timestamps: false
    });

    const house = sequelize.import('./house.js');

    housePhoto.belongsTo(house, {foreignKey: 'house_id'});

    return housePhoto;
}