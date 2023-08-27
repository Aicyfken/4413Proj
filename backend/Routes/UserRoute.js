var express = require('express');
var cors = require('cors');
const UserController = require('../Controllers/UserController');

var router = express.Router();

var corsOptions = {
    credentials:true,
    origin:'http://localhost:3000',
    optionsSuccessStatus:200
};

router.use(cors(corsOptions));
router.use(express.urlencoded({extended: true}));

router.use(express.json());
router.post('/login', UserController.validate);
router.post('/register', UserController.addUser);

module.exports = router;