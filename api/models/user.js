// dependencies
var mongoose = require('mongoose'),
  timestamps = require('mongoose-timestamp'),
  Schema = mongoose.Schema;

// schema
var UserSchema = new Schema({
  username : {type: String, unique: true},
  email : {type : String, unique: true, lowercase : true, trim : true},
  password : {type: String, unique: true}
});

// timestamps
UserSchema.plugin(timestamps);

// methods
UserSchema.methods.validPassword = function (password) {
  return this.password === password;
}

// export
module.exports = mongoose.model('User', UserSchema);