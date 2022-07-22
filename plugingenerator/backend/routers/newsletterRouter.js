// creating a new router for user
// for performing user database operations
const express = require('express');
const { findOne } = require('../models/newsletterModel');
const router = express.Router();

// importing user model in this router
const Model = require('../models/newsletterModel');

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


module.exports = router;
