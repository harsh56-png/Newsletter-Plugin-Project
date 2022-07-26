const mongoose = require('mongoose');
const dbName = "PluginGenerator";
const dbUrl = `mongodb+srv://harsh_56:Harshsr56@cluster0.yhmvr.mongodb.net/${dbName}?retryWrites=true&w=majority`;

// this is an asynchronous funtion
// it returns a promise
mongoose.connect(dbUrl)
    .then((result) => {
        console.log("connected to mongoDB");
        
    }).catch((err) => {
        console.error(err);
    });

    module.exports = mongoose;

