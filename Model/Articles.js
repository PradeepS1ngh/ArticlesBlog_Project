const mongoose = require('mongoose');

const ArticlesSchema = mongoose.Schema({
    user : {
        type : mongoose.Schema.Types.ObjectId,
        ref : 'user'
    },
    tagname : {
        type : String,
        required : true
    },
    heading : {
        type : String,
        required : true
    },
    desc : {
        type : String,
        required : true
    },
    date : {
        type : Date,
        default : Date.now
    },
})

module.exports = mongoose.model('articles',ArticlesSchema);