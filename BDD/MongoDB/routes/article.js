var express = require('express');
var router = express.Router();
var articleModel = require ('../models/articleSchema');

//post to collection
router.post('/post', function(req, res, next) {

    const nameArticle  = req.body.name ;
    const pictureArticle = req.body.picture ;
    const priceArticle = req.body.price ;
    const id_menuArticle = req.body.id_menu;
    const newarticle = new articleModel({ name : nameArticle ,picture : pictureArticle ,price : priceArticle , id_menu : id_menuArticle   }) ;
    newarticle.save(function (err, doc){
        if(!err){
            res.status(201).json({response : true , menu: {statut :"created" , infos : doc   }});    
            
        }else{
            res.status(404).json({response : false , error :err});
        }
    });

});


module.exports = router;
