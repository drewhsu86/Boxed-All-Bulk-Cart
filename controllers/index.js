const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
const User = require("../models/users")
const db = require('../db')
const Entry = require("../models/products")


const SALT_ROUNDS = 11
const TOKEN_KEY = "cap2crunch0mustache2pancake0party"

db.on("error", console.error.bind(console, "MongoDB Connection Error:"))

//Get all products
async function getProducts(req, res) {
  try {
    const products = await Product.find()

    res.json(products)
  } catch (error) {
    res.status(500).json({error: error.message})
  }
}

//Get a product
async function getProduct(req, res) {
  try {
    const id = req.params.id
    const product = await Product.findById(id)

    res.json(product)
  } catch (error) {
    res.status(500).json({ error: error.message })
  }
}

//Create a product
async function createProduct(req, res) {
  try {
    console.log(res.locals.user)
    const product = await new Product({ ...req.body, authors: [res.locals.user.id] })
    await product.save()

    res.status(201).json(product)
  } catch (error) {
    res.status(500).json({ error: error.message })
  }
}