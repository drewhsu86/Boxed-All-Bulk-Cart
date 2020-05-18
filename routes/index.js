const { Router } = require("express")
const router = Router()
const controllers = require("../controllers")
// const restrict = require("../helpers")

//home
router.get("/", (req, res) => res.send("This is root!"))

//get all products
router.get("/products", (req, res) => controllers.getProducts(req, res))

//get one product
router.get("/products/:id", (req, res) => controllers.getProduct(req, res))

//add one product
router.post("/products", (req, res) => controllers.createProduct(req, res))

//edit one product 
router.put("/products/:id", (req, res) => controllers.editProduct(req, res))

//delete one product 
router.delete("/products/:id", (req, res) => controllers.deleteProduct(req, res))

//sign-in
router.post("/signin", (req, res) => controllers.signIn(req, res))

//sign-up
router.post("/signup", (req, res) => controllers.signUp(req, res))

//verify user
router.get('/verifyuser', (req, res) => controllers.verifyUser(req, res))

//get array of products by IDs
//would normally be get but we use post to include an array
//with the key requestIDs (of ID strings)
// a function for finding products for orderAgain if each customer
// has products saved to their account 
router.post('/searchIDs/products', (req, res) => controllers.searchIDs(req, res))

// get all items with the category schema key match
// case insensitive match but correct spelling required
router.get('/categories/:category', (req, res) => controllers.category(req, res))

// get all items with the category schema key match
// as well as subcategory schema key match
// case insensitive match but correct spelling required
router.get('/categories/:category/:subcategory', (req, res) => controllers.subcategory(req, res))

// get all items that match a search term in the searchbar
// so we use $regex to see if it includes a phrase, and make it case insensitive
// and we check the following fields in the products schema:
// name, categories, subcategories, typeOfProduct, values, brands
router.get('/search/:terms', (req, res) => controllers.searchBar(req, res))

module.exports = router