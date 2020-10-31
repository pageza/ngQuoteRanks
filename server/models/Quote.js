const mongoose = require('mongoose');
// Creating the Schema
const QuoteSchema = new mongoose.Schema({
  author: {
    type: String,
    required: [true, 'An author is required'],
    minlength:[3, 'Author name must be more than 3 characters'],
  },
  quote: {
    type: String,
    required: [true, 'A quote is required'],
    minlength: [5, 'The quote must be at least 5 characters long']
  },
  vote: {
    type: Number,
    default: 0
  }
}, {timestamps:{createdAt: 'createdAt', updatedAt: 'updatedAt'}})

// Registering the Schema as a Model
mongoose.model('Quote', QuoteSchema)
