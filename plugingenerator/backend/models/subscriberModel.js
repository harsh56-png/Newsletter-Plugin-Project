const {Schema, model, Types} = require('../connection');   // importing connection.js

const ob = new Schema({
    name: String,
    email: String,
    owner: {type: Types.ObjectId, ref: 'Users'},
    
    
    

})

module.exports = model('Subscribers', ob);