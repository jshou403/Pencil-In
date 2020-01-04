const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const bcrypt = require('bcryptjs');
mongoose.Promise = Promise;

const UserSchema = new Schema({
  username: {
    type: String,
    required: true
  },
  password: {
    type: String,
    required: true
  },
  firstname: {
    type: String,
    required: true
  },
  lastname: {
    type: String,
    required: true
  },
  teacher: {
    type: Boolean,
    required: true
  }
});

UserSchema.methods = {
  checkPassword: function(inputPassword) {
    return bcrypt.compareSync(inputPassword, this.password);
  },
  hashPassword: plainTextPassword => {
    return bcrypt.hashSync(plainTextPassword, 10);
  }
};

UserSchema.pre("save", function(next) {
  if (!this.password) {
    console.log("models/user.js =======NO PASSWORD PROVIDED=======");
    next();
  } else {
    console.log("models/user.js hashPassword in pre save");
    this.password = this.hashPassword(this.password);
    next();
  }
});

const User = mongoose.model("User", UserSchema);
module.exports = User;
