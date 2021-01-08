const mongoose = require('mongoose');
const config = require('config');

// Get URl
const db = config.get('mongoURL');

const connectDB = async() => {
    try {
        mongoose.connect(db,{
            useFindAndModify : false,
            useCreateIndex : true,
            useNewUrlParser : true,
            useUnifiedTopology : true
        })
        console.log('MOngoDB Connected...');
    } catch (err) {
        consolee.log(err.message);
        process.exit(1);
    }
}

module.exports = connectDB;
