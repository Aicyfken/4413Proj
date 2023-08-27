var db = require('../Database/index');
var { Sequelize, Op } = require('sequelize');

async function getAllBrands() {
    var brands = await db.brands.findAll()
    return brands
}

async function findBrandByID(id) {
    var brand = await db.brands.findOne({
        where:{
           id:id
        }
    })
    return brand
}

module.exports = {
    getAllBrands,
    findBrandByID
}