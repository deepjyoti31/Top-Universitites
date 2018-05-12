const express = require('express');
const router = express.Router();
const Uni = require('../models/uni')


//get a uni detail from the db

router.get('/uni', function(req, res, next){
    Uni.find({}).then(function(uni){
        res.send(uni);
    });
});

router.get('/uni/:name', function(req, res){
    //console.log(req.params.name);
    Uni.findOne({name: req.params.name}).then(function(uni){
        res.send(uni);
    });
    
});




//add a uni detail to the db

router.post('/uni', function(req, res, next){
    Uni.create(req.body).then(function(uni){
        res.send(uni);
    }).catch(next);
});

//update a uni detail from the db

router.put('/uni/:id', function(req, res, next){
    Uni.findByIdAndUpdate({_id: req.params.id}, req.body).then(function(){
        Uni.findOne({_id: req.params.id}).then(function(uni){
            res.send(uni);
        });
    });
});

//delete a uni detail from the db

router.delete('/uni/:id', function(req, res, next){
    Uni.findByIdAndRemove({_id: req.params.id}).then(function(uni){
        res.send(uni);
    });
});


module.exports = router;