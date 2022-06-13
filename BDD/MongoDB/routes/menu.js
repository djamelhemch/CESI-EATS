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
            res.status(404).json({response : false , error :err});
        }
    });

});

//get by id from collection
router.get('/get/:id', function(req, res, next) {
    var id= req.params.id;
    menuModel.findById(id)
     .then(menuModel => res.status(200).json(menuModel))
     .catch(error => res.status(400).json({ error }));
});

// get all from collection
router.get('/getall', function(req, res, next) {
    menuModel.find()
     .then(menuModel => res.status(200).json(menuModel))
     .catch(error => res.status(400).json({ error }));
});

// delete by id from collection
router.delete('/delete/:id', function(req, res, next) {
    var id= req.params.id;
    menuModel.find({id : id}).remove()
     .then(menuModel => res.status(200).json(menuModel))
     .catch(error => res.status(400).json({ error }));
});
module.exports = router;
