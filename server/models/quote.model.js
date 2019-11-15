const mongoose = require('mongoose'); 

const Schema = mongoose.Schema; 

const quoteSchema = new Schema({
  num: { required: true, unique: true, type: Number },
  title: { required: true, trim: true, type: String },
  context: { required: true, trim: true, type: String }, 
  quote: { required: true, trim: true, type: String },
  date: { required: true, type: Date }
},
  {
    timestamps: true
  }
)

const Quote = mongoose.model('Quote', quoteSchema); 

module.exports = Quote; 