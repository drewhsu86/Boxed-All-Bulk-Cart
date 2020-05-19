const mongoose = require('mongoose')
const Schema = mongoose.Schema

const Product = new Schema({
  name: { type: String, required: true },
  
  images: { type: Array, required: true },
  
  description: { type: String, required: true },

  price: { type: String, required: true },

  rating: { type: Number, required: true },
  
  stock: { type: Number, required: true },

  categories: { type: String, required: true },

  subcategories: { type: String, required: true },

  typeOfProduct: { type: String, required: false },
  
  values: { type: String, required: false },
  
  brands : { type: String, required: false },
},
  {
    timestamps: true
  })

module.exports = mongoose.model("products", Product)