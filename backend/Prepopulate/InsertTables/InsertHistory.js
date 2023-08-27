module.exports = async function InsertForm(db) {
    var histories = require('../Data/history.json')
    var historyPromises = []
    
    for (var history of histories) {
        historyPromises.push(await db['histories'].create({
            itemname: history.itemname,
            username: history.username,
            date: history.date
        })
        .catch(err => {console.log(err)})
        )
    }

    return historyPromises
}