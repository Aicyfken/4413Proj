var UserModel = require('../Models/UserModel');

exports.getAllUsers = (req, res) => {
    UserModel.getAllUsers()
        .then(response => {
            res.status(200).send(response)
        })
        .catch(err => {
            console.log(err)
            res.status(400).send('Error')
        })
};

exports.findUser = (req, res) => {
    UserModel.findUserByName(req.params.username)
        .then(response => {
            res.status(200).send(response)
        })
        .catch(err => {
            console.log(err)
            res.status(400).send('Error')
        })
};

exports.addUser = (req, res) => {
    UserModel.findUserByName(req.body.username)
        .then(response => {
            if (response == null) {
                UserModel.addUser(req.body.username, req.body.password)
                    .then(response => {
                        res.status(200).send(true)
                    })
                    .catch(err => {
                        console.log(err)
                        res.status(400).send('Error')
                    })
            } else res.status(200).send(false)
        })
        .catch(err => {
            console.log(err)
            res.status(400).send('Error')
        })
};

exports.validate = (req, res) => {
    //console.log(req)
    UserModel.findUserByName(req.body.username)
        .then(response => {
            if (response == null) {
                res.status(200).send([false, null])
            } else if (response.password != req.body.password) {
                res.status(200).send([false, null])
            } else res.status(200).send([true, response])
        })
        .catch(err => {
            console.log(err)
            res.status(400).send('Error')
        })
};