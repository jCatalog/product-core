// dependencies
var mongoose = require('mongoose'),
  timestamps = require('mongoose-timestamp'),
  Schema = mongoose.Schema,
  ObjectId = Schema.ObjectId;

// schema
var CurrencySchema = new Schema({
  name : {type: String, unique: true}
});

// timestamps
CurrencySchema.plugin(timestamps);

// export
module.exports = mongoose.model('Currency', CurrencySchema);