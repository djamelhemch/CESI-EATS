var express = require('express');
var router = express.Router();
var orderModel = require ('../models/orderSchema');

//post to collection
router.post('/post', function(req, res, next) {

    const id_commandeOrder  = req.body.id_commande ;
    const n_commandeOrder = req.body.n_commande ;
    const dateOrder = req.body.date ;
    const totalOrder = req.body.total ;
    const payementMethodOrder = req.body.payementMethod ;

    const newOrder = new orderModel({ id_commande: id_commandeOrder , n_commande: n_commandeOrder , date: dateOrder , total: totalOrder , payementMethod: payementMethodOrder }) ;
    newOrder.save(function (err, doc){
        if(!err){ 
            res.status(201).json({response : true , order: {statut :"created" , infos : doc   }});    
            
        }else{
            res.status(404).json({response : false , error :err});
        }
    });

});


module.exports = router;
