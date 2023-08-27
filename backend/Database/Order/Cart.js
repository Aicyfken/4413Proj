const Sequelize = require('sequelize');

module.exports = (sequelize, DataTypes) => {
    class Cart extends Sequelize.Model {}

    Cart.init({
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            allowNull: false,
            primaryKey: true
        },
        itemname: {
            type: DataTypes.STRING,
            allowNull: false
        },
        username: {
            type: DataTypes.STRING,
            allowNull: false
        }
        
    }, { sequelize, modelName:'carts', timestamps: false});

    return Cart;
}