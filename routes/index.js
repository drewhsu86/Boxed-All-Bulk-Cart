const { Router } = require("express")
const router = Router()
const controllers = require("../controllers")
// const restrict = require("../helpers")

//home
router.get("/", (req, res) => res.send("This is root!"))

//get user based on token
router.get("/user", (req, res) => controllers.tokenUser(req, res))

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

module.exports = router