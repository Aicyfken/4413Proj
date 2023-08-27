module.exports = async function InsertForm(db) {
    var categories = require('../Data/category.json')
    var categoryPromises = []
    
    for (var category of categories) {
        console.log(category);
        categoryPromises.push(await db['categories'].create({
            name: category.name
        })
        .catch(err => {console.log(err)})
        )
    }
    return categoryPromises
}