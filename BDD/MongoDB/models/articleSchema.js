var mongoose = require ('mongoose');
var bddConnect = require('../bdd/mongoose');

bddConnect('CESIEATS');

const articleSchema = new mongoose.Schema({
    id_article : Number,
    name : String,
    picture : String,
    price : String,
    id_menu : Number,
},
{
    versionKey: false
}
);

const articleModel = mongoose.model('article' , articleSchema);

module.exports  = articleModel ;