var express = require('express');
var cors = require('cors');
const CategoryController = require('../Controllers/CategoryController');

var router = express.Router();

var corsOptions = {
    credentials:true,
    origin:'http://localhost:3000',
    optionsSuccessStatus:200
};

router.use(cors(corsOptions));
router.use(express.urlencoded({extended: true}));
router.use(express.json());

router.get('/all', CategoryController.getAllCategories);
router.get('/ID/:id', CategoryController.findCategoryByID);

module.exports = router;