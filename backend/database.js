const mongoose = require('mongoose');

const db = "mongodb://localhost:27017/la-fresco";
mongoose.connect(db,
{useNewUrlParser: true,useCreateIndex: true,useUnifiedTopology:true},
err=>{
    if(!err){
        console.log('Connection with Mongo database has been established');
    }
    else{
        console.log('Error while to connecting Mongo database : ' + JSON.stringify(err, undefined, 2));
    }
});