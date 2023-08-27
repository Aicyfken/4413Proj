module.exports = async function InsertForm(db) {
    var items = require('../Data/item.json')
    var itemPromises = []
    
    for (var item of items) {
        console.log(item);
        itemPromises.push(await db['items'].create({
            name: item.name,
            categoryID: item.categoryID,
            brandID: item.brandID,
            price: item.price
        })
        .catch(err => {console.log(err)})
        )
    }

    return itemPromises
}