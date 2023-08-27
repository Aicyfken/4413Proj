const Sequelize = require('sequelize');

module.exports = (sequelize, DataTypes) => {
    class Brand extends Sequelize.Model {}

    Brand.init({
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            allowNull: false,
            primaryKey: true
        },
        name: {
            type: DataTypes.STRING,
            allowNull: false
        }
        
    }, { sequelize, modelName:'brands', timestamps: false});

    return Brand;
}