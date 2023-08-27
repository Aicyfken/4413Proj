module.exports = async function InsertForm(db) {
    var brands = require('../Data/brand.json')
    var brandPromises = []
    
    for (var brand of brands) {
        console.log(brand);
        brandPromises.push(await db['brands'].create({
            name: brand.name
        })
        .catch(err => {console.log(err)})
        )
    }
    return brandPromises
}