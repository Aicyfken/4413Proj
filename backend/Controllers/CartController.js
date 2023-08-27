const { response } = require('express');
var CartModel = require('../Models/CartModel');

exports.getAllCarts = (req, res) => {
    CartModel.getAllCarts()
    .then(response => {
        res.status(200).send(response)
    })
    .catch(err => {
        console.log(err)
        res.status(400).send('Error')
    })
};

exports. findCartByUser = (req, res) => {
    CartModel.findCartByUser(req.params.name)
    .then(response => {
        res.status(200).send(response)
    })
    .catch(err => {
        console.log(err)
        res.status(400).send('Error')
    })
};

exports.addItem = (req, res) => {
    CartModel.addItem(req.body.item, req.body.name)
    .then(
        CartModel.findCartByUser(req.body.name)
        .then(response => {
            res.status(200).send(response)
        }))
    .catch(err => {
        console.log(err)
        res.status(400).send('Error')
    })
};

exports.deleteOne = (req, res) => {
    CartModel.deleteOne(req.body.item, req.body.name)
    .then(
        CartModel. findCartByUser(req.body.name)
        .then(response => {
            res.status(200).send(response)
        }))
    .catch(err => {
        console.log(err)
        res.status(400).send('Error')
    })
};

exports.deleteAll = (req, res) => {
    CartModel.deleteAll(req.body.name)
    .then(res.status(200).send({}))
    .catch(err => {
        console.log(err)
        res.status(400).send('Error')
    })
};
