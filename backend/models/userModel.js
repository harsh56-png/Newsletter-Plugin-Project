const {Schema, model} = require('../connection');   // importing connection.js

const ob = new Schema({
    fname: String,
    lname: String,
    email: String,
    password: String,
})

module.exports = model('Users', ob);