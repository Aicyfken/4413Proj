const Sequelize = require('sequelize');

module.exports = (sequelize, DataTypes) => {
    class Item extends Sequelize.Model {}

    Item.init({
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            allowNull: false,
            primaryKey: true
        },
        name: {
            type: DataTypes.STRING,
            allowNull: false
        },
        categoryID: {
            type: DataTypes.STRING,
            allowNull: false
        },
        brandID: {
            type: DataTypes.STRING,
            allowNull: false
        },
        price: {
            type: DataTypes.DOUBLE,
            allowNull: false
        }
        
    }, { sequelize, modelName:'items', timestamps: false});

    return Item;
}