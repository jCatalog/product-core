// dependencies
var mongoose = require('mongoose');
var timestamps = require('mongoose-timestamp');
var Schema = mongoose.Schema;
var ObjectId = Schema.ObjectId;

// schema
var CurrencySchema = new Schema({
  name : {type: String, unique: true}
});

// timestamps
CurrencySchema.plugin(timestamps);

// export
module.exports = mongoose.model('Currency', CurrencySchema);