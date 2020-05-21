const db = require("../db")
const Product = require("../models/products")
const products = require("../WebScrape/products_05-20-20_23:54:23.json")

db.on("error", console.error.bind(console, "MongoDB Connection Error:"))

const main = async () => {
  try {
    // no deletion for this seeding
    await Product.insertMany(products)
    console.log("Seeded appended products!")
  } catch (er) {
    console.log(er)
  }
}

const run = async () => {
  await main()
  db.close()
}

console.log(products.length)
run()