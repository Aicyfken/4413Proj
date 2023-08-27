var db = require('../Database/index');
var { Sequelize, Op } = require('sequelize');

async function getAllItems() {
    var items = await db.items.findAll()
    return items
}

async function findItemByCategory(id) {
    var item = await db.items.findAll({
        where:{
           categoryID:id
        }
    })
    return item
}

async function findItemByBrand(id) {
    var item = await db.items.findAll({
        where:{
           brandID:id
        }
    })
    return item
}

module.exports = {
    getAllItems,
    findItemByCategory,
    findItemByBrand
}