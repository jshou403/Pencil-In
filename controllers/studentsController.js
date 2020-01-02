const db = require("../models");

module.exports = {
    // lsit of functions that will be exported when we require our book model to perform crud operations 
    findAll: function(req, res) {
        db.Student
          .find(req.query)
          .then(dbStudent => res.json(dbStudent))
          .catch(err => res.status(422).json(err));
      }
    //   findById: function(req, res) {
    //     db.User
    //       .findById(req.params.id)
    //       .then(dbModel => res.json(dbModel))
    //       .catch(err => res.status(422).json(err));
    //   }
    
    };