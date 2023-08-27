var express = require('express');
var cors = require('cors');
const CartController = require('../Controllers/CartController');

var router = express.Router();

var corsOptions = {
    credentials:true,
    origin:'http://localhost:3000',
    optionsSuccessStatus:200
};

router.use(cors(corsOptions));
router.use(express.urlencoded({extended: true}));
router.use(express.json());

router.get('/all', CartController.getAllCarts);
router.get('/user/:name', CartController.findCartByUser);
router.post('/add', CartController.addItem);
router.post('/rm', CartController.deleteOne);
router.post('/rmAll', CartController.deleteAll);

module.exports = router;