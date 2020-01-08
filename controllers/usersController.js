const db = require("../models");

module.exports = {
  // list of functions that will be exported when we require our user model to perform crud operations

  findUser: function(req, res) {
    db.User.findOne({ _id: req.user._id })
      .then(dbModel =>
        res.json({
          user: dbModel,
          userId: dbModel._id
        })
      )
      .catch(err => res.json(err));
  }
  
};

  // findAll: function(req, res) {
  //     db.User
  //     .find(req.query)
  //     .then(dbUser => res.json(dbUser))
  //     .catch(err => res.status(422).json(err))