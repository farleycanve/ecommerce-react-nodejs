const express=require('express');
const app=express();
var bodyParser = require('body-parser')

const authRoutes=require('./routes/auth')
const adminRoutes=require('./routes/admin/auth')
const db=require('./db/config')
const categoryRoutes=require('./routes/category')
const productRoutes=require('./routes/product')
const cartRoutes=require('./routes/cart');
//connect to db
db.connect();
require('dotenv').config();
app.use(express.json());

app.use('/api',authRoutes);
app.use('/api',adminRoutes);
app.use('/api',categoryRoutes);
app.use('/api',productRoutes);
app.use('/api',cartRoutes);


app.listen(process.env.PORT, function() {
    console.log(`Server is listening on port ${process.env.PORT}`)
})
