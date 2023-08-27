var express = require('express');
var cors = require('cors');
const BrandController = require('../Controllers/BrandController');

var router = express.Router();

var corsOptions = {
    credentials:true,
    origin:'http://localhost:3000',
    optionsSuccessStatus:200
};

router.use(cors(corsOptions));
router.use(express.urlencoded({extended: true}));
router.use(express.json());

router.get('/all', BrandController.getAllBrands);
router.get('/ID/:id', BrandController.findBrandByID);

module.exports = router;