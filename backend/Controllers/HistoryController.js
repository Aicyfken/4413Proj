var historyModel = require('../Models/HistoryModel');

exports.getAllHistories = (req, res) => {
    historyModel.getAllHistories()
    .then(response => {
        res.status(200).send(response)
    })
    .catch(err => {
        console.log(err)
        res.status(400).send('Error')
    })
};

exports.findHistoryByUser = (req, res) => {
    historyModel.findHistoryByUser(req.params.name)
    .then(response => {
        res.status(200).send(response)
    })
    .catch(err => {
        console.log(err)
        res.status(400).send('Error')
    })
};

exports.addHistories = (req, res) => {
    console.log(req.body.historyArray);
    historyModel.addHistories(req.body.historyArray)
    .then(response => {
        res.status(200).send(response)
    })
    .catch(err => {
        console.log(err)
        res.status(400).send('Error')
    })
};