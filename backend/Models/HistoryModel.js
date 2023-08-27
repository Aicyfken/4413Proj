var db = require('../Database/index');
var { Sequelize, Op } = require('sequelize');

async function getAllHistories() {
    var histories = await db.histories.findAll()
    return histories
}

async function findHistoryByUser(name) {
    var history = await db.histories.findAll({
        where: {
            username: name
        }
    })
    return history
}

async function addHistories(historyArray) {
    const today = new Date();
    const formattedDate = today.toLocaleDateString('en-CA', {
        year: 'numeric',
        month: '2-digit',
        day: '2-digit'
    }).replace(/\//g, '-');

    for (const history of historyArray) {
        console.log(history);
        db.histories.create({
            itemname: history.itemname,
            username: history.username,
            date:formattedDate
        })
    }
    return null;
}

    module.exports = {
        getAllHistories,
        findHistoryByUser,
        addHistories
    }