const mongoose=require('mongoose');
async function connect(){
    try{
        await mongoose.connect('mongodb://localhost:27017/ecommerce', {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useFindAndModify: false,
        useCreateIndex: true
        });
        console.log('mongodb: Connect successfully')
    }catch{
        console.log('mongodb: Connect failed')
    }
}
module.exports = {connect}