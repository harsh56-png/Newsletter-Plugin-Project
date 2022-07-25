// creating a new router for user
// for performing user database operations
const express = require('express');
const { findOne } = require('../models/userModel');
const router = express.Router();

// importing user model in this router
const Model = require('../models/userModel');


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

router.get('/authenticate', (req, res) => {
    const formdata = req.body;
    Model.findOne({email: formdata.email, password: formdata.password})
    .then((result) => {
        console.log(result);

        if(result) {
            console.log('login success');
            res.json(result);
        }
        else {
            console.log('login failed');
            res.status(400).json({message: 'login failed'});
        }
        
})


.catch((err) => {
    console.log(err);
    res.status(500).json(err);
});
});

module.exports = router;