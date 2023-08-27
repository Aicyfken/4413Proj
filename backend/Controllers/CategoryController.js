var categoryModel = require('../Models/CategoryModel');

exports.getAllCategories = (req, res) => {
    console.log("log");
    categoryModel.getAllCategories()
    .then(response => {
        res.status(200).send(response)
    })
    .catch(err => {
        console.log(err)
        res.status(400).send('Error')
    })
};

exports.findCategoryByID = (req, res) => {
    categoryModel.findCategoryByID(req.params.id)
    .then(response => {
        res.status(200).send(response)
    })
    .catch(err => {
        console.log(err)
        res.status(400).send('Error')
    })
};