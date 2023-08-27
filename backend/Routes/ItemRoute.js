var express = require('express');
var cors = require('cors');
const ItemController = require('../Controllers/ItemController');

var router = express.Router();

var corsOptions = {
    credentials:true,
    origin:'http://localhost:3000',
    optionsSuccessStatus:200
};

router.use(cors(corsOptions));
router.use(express.urlencoded({extended: true}));
router.use(express.json());

router.get('/all', ItemController.getAllItems);
router.get('/category/:categoryID', ItemController.findItemByCategory);
router.get('/brand/:brandID', ItemController.findItemByBrand);

module.exports = router;