const mongoose = require('mongoose')
mongoose.Promise = global.Promise

// const uri = (process.env.MONGODB_URI || "mongodb://localhost/classroom")

const uri = (process.env.MONGODB_URI || "mongodb://pencil-in-admin:bestadmin1@ds359868.mlab.com:59868/heroku_vn8cpk86")

// { useNewUrlParser: true , useUnifiedTopology: true }

mongoose.connect(uri).then(
    () => { 
        console.log('Connected to Mongo');
        
    },
    err => {
         console.log(err);
        }
  );

module.exports = mongoose.connection