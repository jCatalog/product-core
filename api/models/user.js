// dependencies
var mongoose = require('mongoose'),
  timestamps = require('mongoose-timestamp'),
  Schema = mongoose.Schema;

// schema
var UserSchema = new Schema({
  name : {type: String, unique: true},
  email : {type : String, lowercase : true, trim : true}
});

// timestamps
UserSchema.plugin(timestamps);

// export
module.exports = mongoose.model('User', UserSchema);