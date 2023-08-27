const Sequelize = require('sequelize');

const sequelize = new Sequelize({
    host: 'localhost',
    dialect: 'sqlite',
    storage: './database.sqlite'
}); //设置数据库

var db = {};

var userTable = require('./User/User.js')(sequelize, Sequelize.DataTypes)
var itemTable = require('./Item/Item.js')(sequelize, Sequelize.DataTypes)
var categoryTable = require('./Item/Category.js')(sequelize, Sequelize.DataTypes)
var brandTable = require('./Item/Brand.js')(sequelize, Sequelize.DataTypes)
var cartTable = require('./Order/Cart.js')(sequelize, Sequelize.DataTypes)
var historyTable = require('./Order/History.js')(sequelize, Sequelize.DataTypes)
db[userTable.name] = userTable;
db[itemTable.name] = itemTable;
db[categoryTable.name] = categoryTable;
db[brandTable.name] = brandTable;
db[cartTable.name] = cartTable;
db[historyTable.name] = historyTable;

//插入预置数据
sequelize.sync({force:true})
.then(() => {
    require('../Prepopulate/InsertTables/InsertUser.js')(db)
    require('../Prepopulate/InsertTables/InsertItem.js')(db)
    require('../Prepopulate/InsertTables/InsertCategory.js')(db)
    require('../Prepopulate/InsertTables/InsertBrand.js')(db)
    require('../Prepopulate/InsertTables/InsertCart')(db)
    require('../Prepopulate/InsertTables/InsertHistory.js')(db)
});

db.sequelize = sequelize;
db.Sequelize = Sequelize;

module.exports = db;