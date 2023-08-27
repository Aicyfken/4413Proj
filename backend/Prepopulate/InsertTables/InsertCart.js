module.exports = async function InsertForm(db) {
    var carts = require('../Data/cart.json')
    var cartPromises = []
    
    for (var cart of carts) {
        cartPromises.push(await db['carts'].create({
            itemname: cart.itemname,
            username: cart.username
        })
        .catch(err => {console.log(err)})
        )
    }

    return cartPromises
}