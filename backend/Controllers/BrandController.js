var brandModel = require('../Models/BrandModel');

exports.getAllBrands = (req, res) => {
    brandModel.getAllBrands()
    .then(response => {
        res.status(200).send(response)
    })
    .catch(err => {
        console.log(err)
        res.status(400).send('Error')
    })
};

exports.findBrandByID = (req, res) => {
    brandModel.findBrandByID(req.params.id)
    .then(response => {
        res.status(200).send(response)
    })
    .catch(err => {
        console.log(err)
        res.status(400).send('Error')
    })
};