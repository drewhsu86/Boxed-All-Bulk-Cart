const mongoose = require('mongoose')
const Schema = mongoose.Schema

const Product = new Schema({
  name: { type: String, required: true },
  
  imgURL: { type: Array, required: true },
  
  description: { type: String, required: true },

  price: { type: String, required: true },

  rating: { type: Number, required: true },
  
  stock: { type: Number, required: true },

  categories: { type: String, required: true },

  subcategories: { type: String, required: true },
},
  {
    timestamps: true
  })

module.exports = mongoose.model("products", Product)