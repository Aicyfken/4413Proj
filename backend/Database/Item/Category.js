const Sequelize = require('sequelize');

module.exports = (sequelize, DataTypes) => {
    class Category extends Sequelize.Model {}

    Category.init({
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
        
    }, { sequelize, modelName:'categories', timestamps: false});

    return Category;
}