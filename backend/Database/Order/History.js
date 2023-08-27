const Sequelize = require('sequelize');

module.exports = (sequelize, DataTypes) => {
    class History extends Sequelize.Model {}

    History.init({
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
        },
        date: {
            type: DataTypes.STRING,
            allowNull: false
        }
        
    }, { sequelize, modelName:'histories', timestamps: false});

    return History;
}