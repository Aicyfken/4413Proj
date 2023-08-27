var ItemModel = require('../Models/ItemModel');

exports.getAllItems = (req, res) => {
    ItemModel.getAllItems()
    .then(response => {
        res.status(200).send(response)
    })
    .catch(err => {
        console.log(err)
        res.status(400).send('Error')
    })
};

exports.findItemByCategory = (req, res) => {
    ItemModel.findItemByCategory(req.params.categoryID)
    .then(response => {
        res.status(200).send(response)
    })
    .catch(err => {
        console.log(err)
        res.status(400).send('Error')
    })
};

exports.findItemByBrand = (req, res) => {
    ItemModel.findItemByBrand(req.params.brandID)
    .then(response => {
        res.status(200).send(response)
    })
    .catch(err => {
        console.log(err)
        res.status(400).send('Error')
    })
};
