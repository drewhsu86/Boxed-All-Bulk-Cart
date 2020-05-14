const db = require("../db")
const Product = require("../models/products")
const User = require("../models/users")
const bcrypt = require('bcrypt')
// const products = require("./product.json")
  
db.on("error", console.error.bind(console, "MongoDB Connection Error:"))

const main = async () => {
  try {
    await Product.deleteMany()
    await User.deleteMany()

    const andrewPW = await bcrypt.hash('123456', 11)

    const users = [{
      email: "andrew1@bruno1.com",
      username: "andrew1",
      password_digest: andrewPW
    }]

    await User.insertMany(users)
    console.log("Seeded initial users!")

    const products = [{
      "name": "Product 001",
      "images": [
        "https://i.imgur.com/aJIBBDK.jpg",
        "https://i.imgur.com/hqxVr7Q.jpg",
        "https://i.imgur.com/BAe5mwe.jpg",
        "https://i.imgur.com/3z1wuuc.png"
      ],
      "description": "Yummy in my tummy :)",
      "price": "4.99",
      "rating": "3",
      "stock": "25",
      "categories": "grocery",
      "subcategories": "cereal & breakfast",
      "typeOfProduct": "cereals",
      "values": "gluten free",
      "brands": "Kellog's"
    }]
  
    await Product.insertMany(products)
    console.log("Seeded initial products!")
  } catch (er) {
    console.log(er)
  }
}

const run = async () => {
  await main()
  db.close()
}

run()