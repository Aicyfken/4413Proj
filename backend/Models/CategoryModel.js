var db = require('../Database/index');
var { Sequelize, Op } = require('sequelize');

async function getAllCategories() {
    var categories = await db.categories.findAll()
    return categories
}

async function findCategoryByID(id) {
    var category = await db.categories.findOne({
        where:{
           id:id
        }
    })
    return category
}

module.exports = {
    getAllCategories,
    findCategoryByID
}