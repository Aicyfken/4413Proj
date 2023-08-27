var db = require('../Database/index');
var { Sequelize, Op } = require('sequelize');

async function getAllCarts() {
    var carts = await db.carts.findAll()
    return carts
}

async function findCartByUser(name) {
    var cart = await db.carts.findAll({
        where: {
            username: name
        }
    })
    return cart
}

async function addItem(item, user) {
    var cart = await db.carts.create({
        itemname: item,
        username: user
    })

    return cart
}

async function deleteOne(item, user) {
    var cart = await db.carts.destroy({
        where: {
            itemname: item,
            username: user
        }
    });
    return cart
}

async function deleteAll(user) {
    var cart = await db.carts.destroy({
        where: {
            username: user
        }
    });
    return cart
}


module.exports = {
    getAllCarts,
    findCartByUser,
    addItem,
    deleteOne,
    deleteAll,
}