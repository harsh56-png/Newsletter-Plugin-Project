// creating a new router for user
// for performing user database operations
const express = require('express');
const { findOne } = require('../models/subscriberModel');
const router = express.Router();

// importing user model in this router
const Model = require('../models/subscriberModel'); 

router.post('/add', (req, res) => {
    console.log(req.body);

    new Model(req.body).save()
        .then((data) => {
            console.log(data);
            res.json(data);
            
        }).catch((err) => {
            console.log(err);
            res.status(500).json(err);
            
        });
})

router.get('/getall', (req, res) => {
    Model.find({})
        .then((data) => {
            res.json(data);
            
        }).catch((err) => {
            console.log(err);
            res.status(500).json(err);
            
        });

})


module.exports = router;
