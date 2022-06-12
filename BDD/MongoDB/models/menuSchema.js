var mongoose = require ('mongoose');
var bddConnect = require('../bdd/mongoose');

bddConnect('CESIEATS');

const menuSchema = new mongoose.Schema({
    id_menu : Number,
    name : String,
    picture : String,
    price : String,
    id_restaurant : Number,
});

const menuModel = mongoose.model('menu' , menuSchema);

module.exports  = menuModel ;