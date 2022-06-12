var express = require('express');
var router = express.Router();
var menuModel = require ('../models/menuSchema');

//post to collection
router.post('/post', function(req, res, next) {

    const nameMenu  = req.body.name ;
    const pictureMenu = req.body.picture ;
    const priceMenu = req.body.price ;
    const id_restaurantMenu = req.body.id_restaurant ;

    const newMenu = new menuModel({ name : nameMenu ,picture : pictureMenu,price : priceMenu , id_restaurant: id_restaurantMenu }) ;
    newMenu.save(function (err, doc){
        if(!err){
            res.status(201).json({response : true , menu: {statut :"created" , infos : doc   }});    
            
        }else{
            res.status(500).json({response : false , error :err});
        }
    });

});


module.exports = router;
