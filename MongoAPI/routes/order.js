var express = require('express');
var router = express.Router();
var orderModel = require ('../models/orderSchema');

//post to collection
router.post('/post', function(req, res, next) {

    const numberOrder  = req.body.n_commande ;
    const dateOrder = req.body.date ;
    const totalOrder = req.body.total ;
    const payementMethod = req.body.payementMethod ;

    const newOrder = new orderModel({ n_commande : numberOrder ,date : dateOrder, total : totalOrder, payementMethod :  payementMethod}) ;
    newOrder.save(function (err, doc){
        if(!err){
            res.status(201).json({response : true , order: {statut :"created" , infos : doc   }});    
            
        }else{
            res.status(500).json({response : false , error :err});
        }
    });

});


module.exports = router;
