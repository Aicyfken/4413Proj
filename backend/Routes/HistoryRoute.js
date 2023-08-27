var express = require('express');
var cors = require('cors');
const HistoryController = require('../Controllers/HistoryController');

var router = express.Router();

var corsOptions = {
    credentials:true,
    origin:'http://localhost:3000',
    optionsSuccessStatus:200
};

router.use(cors(corsOptions));
router.use(express.urlencoded({extended: true}));
router.use(express.json());

router.get('/all', HistoryController.getAllHistories);
router.get('/user/:name', HistoryController.findHistoryByUser);
router.post('/add', HistoryController.addHistories);

module.exports = router;