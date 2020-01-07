const db = require("../models");

module.exports = {
  // lsit of functions that will be exported when we require our book model to perform crud operations
  // findAll: function(req, res) {
  //     db.User
  //     .find(req.query)
  //     .then(dbUser => res.json(dbUser))
  //     .catch(err => res.status(422).json(err))
  findUser: function(req, res) {
    db.User.findOne({ _id: req.user._id })
      .then(dbModel =>
        res.json({
          user: dbModel,
          // CHECK THIS 
          userId: dbModel._id
        })
      )
      .catch(err => res.json(err));
  }
};
