var express = require('express');
const UserRouter = require('./Routes/UserRoute');
const ItemRouter = require('./Routes/ItemRoute');
const CategoryRouter = require('./Routes/CategoryRoute');
const BrandRouter = require('./Routes/BrandRoute');
const CartRouter = require('./Routes/CartRoute');
const HistoryRouter = require('./Routes/HistoryRoute');

var app = express();
app.use(express.urlencoded({extended: true}));
app.use(express.json());

app.use('/user', UserRouter);
app.use('/item', ItemRouter);
app.use('/category', CategoryRouter);
app.use('/brand', BrandRouter);
app.use('/cart', CartRouter);
app.use('/history', HistoryRouter);

app.listen(5000, function() {
    console.log('App listening on port 5000...')
});