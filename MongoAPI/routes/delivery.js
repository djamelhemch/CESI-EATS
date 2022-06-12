var express = require('express');
var router = express.Router();
var deliveryModel = require ('../models/deliverySchema');

//post to collection
router.post('/post', function(req, res, next) {

    const  Menu  = req.body.name ;
    const pictureMenu = req.body.picture ;
    const priceMenu = req.body.price ;
    const newMenu = new menuModel({ name : nameMenu ,picture : pictureMenu,price : priceMenu  }) ;
    newMenu.save(function (err, doc){
        if(!err){
            res.status(201).json({response : true , menu: {statut :"created" , infos : doc   }});    
            
        }else{
            res.status(500).json({response : false , error :err});
        }
    });

});


module.exports = router;
