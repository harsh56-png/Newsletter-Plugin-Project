const {Schema, model} = require('../connection');   // importing connection.js

const ob = new Schema({
    name: String,
    age: Number,
    email: String,
    mobile: String,
    password: String,
})

module.exports = model('Users', ob);