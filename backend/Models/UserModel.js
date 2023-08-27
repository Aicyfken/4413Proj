var db = require('../Database/index');
var { Sequelize, Op } = require('sequelize');

async function getAllUsers() {
    var users = await db.users.findAll()
    return users
}

async function findUserByName(name) {
    var user = await db.users.findOne({
        where:{
           username:name
        }
    })
    return user
}

async function addUser(name, pwd) {
    var newUser = await db.users.create({
        username:name,
        password:pwd,
        isAdmin: false
    })
    return newUser
}

module.exports = {
    getAllUsers,
    findUserByName,
    addUser
}