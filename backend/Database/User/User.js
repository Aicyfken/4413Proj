const Sequelize = require('sequelize');

module.exports = (sequelize, DataTypes) => {
    class User extends Sequelize.Model {}

    User.init({
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            allowNull: false,
            primaryKey: true
        },
        username: {
            type: DataTypes.STRING,
            allowNull: false
        },
        password: {
            type: DataTypes.STRING,
            allowNull: false
        },
        isAdmin: {
            type: DataTypes.BOOLEAN,
            allowNull: false
        }
        
    }, { sequelize, modelName:'users', timestamps: false});

    return User;
}