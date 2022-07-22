const {Schema, model, Types} = require('../connection');   // importing connection.js

const ob = new Schema({
    owner: {type: Types.ObjectId, ref: 'Users'},
    content: String,
    createdAt: Date,
    
})

module.exports = model('Newsletter', ob);