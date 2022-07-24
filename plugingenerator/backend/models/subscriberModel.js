const {Schema, model, Types} = require('../connection');   // importing connection.js

const ob = new Schema({
    email: String,
    name: String,
    owner: {type: Types.ObjectId, ref: 'Users'},
    createdAt: Date,
})

module.exports = model('Subscriber', ob);