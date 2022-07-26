const {Schema, model, Types} = require('../connection');   // importing connection.js

const ob = new Schema({
    title: String,
    owner: {type: Types.ObjectId, ref: 'Users'},
    content: String,
    createdAt: Date,
    schedule: Number,
})

module.exports = model('Newslettercontent', ob);