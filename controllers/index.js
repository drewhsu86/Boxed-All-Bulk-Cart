const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
const User = require("../models/users")
const db = require('../db')
const Product = require("../models/products")


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

//Edit a product
async function editProduct(req, res) {
  try {
    await Product.findByIdAndUpdate(req.params.id, req.body, { new: true }, (error, product) => {
      if (error) {
        return res.status(500).json({ error: error.message })
      }
      if (!product) {
        return res.status(404).json({message: "Product not found!"})
      }
      res.status(200).json(product)
    })

  } catch (error) {
    res.status(500).json({ error: error.message })
  }
}

//delete a product
async function deleteProduct(req, res) {
  try {
    const product = await Product.findById(req.params.id)

    const deleted = await Entry.findByIdAndDelete(req.params.id)

    if (deleted) {
      return res.status(200).send("Product deleted!")
    }
    throw new Error ("Product not found!")
  } catch (error) {
    res.status(500).json({
      error: error.message
    })
  }
}

//verify user
const verifyUser = async (req, res) => {
  try {
    const token = req.headers.authorization.split(" ")[1]
    const legit = jwt.verify(token, TOKEN_KEY)
    console.log(legit)
    if (legit) {
      const id = req.params.id
      const user = await User.findById(id)
      res.json(user)
    }
  } catch (error) {
    res.status(401).send('Not Authorized')
  }
}


//sign-in
const signIn = async (req, res) => {
  try {
    const { username, password } = req.body
    const user = await User.findOne({ username: username })
    if (await bcrypt.compare(password, user.password_digest)) {
      const payload = {
        id: user._id,
        username: user.username,
        email: user.email
      }
      const token = jwt.sign(payload, TOKEN_KEY)
      return res.status(201).json({ user, token })
    } else {
      res.status(401).send("Invalid Credentials")
    }
  } catch (error) {
    return res.status(500).json({ error: error.message })
  }
}

//sign-up
async function signUp(req, res) {
  console.log('in sign up')
  try {
    const { username, email, password } = req.body
    const password_digest = await bcrypt.hash(password, SALT_ROUNDS)
    const user = await new User({
      username,
      email,
      password_digest
    })
    await user.save()

    const payload = {
      id: user._id,
      username: user.username,
      email: user.email
    }

    const token = jwt.sign(payload, TOKEN_KEY)

    return res.status(201).json({ user, token })

  } catch (error) {
    console.log("Made it to signUp controller, but there was an error")
    return res.status(400).json({ error: error.message })
  }
}

module.exports = {
  signIn,
  getProducts,
  getProduct,
  createProduct,
  editProduct,
  deleteProduct,
  verifyUser,
  signUp
}