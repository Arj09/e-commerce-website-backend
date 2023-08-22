const express  = require("express")

const validateToken = require("../middleware/validationtokenHandler")
const { getAllProduct, createProduct, deleteProduct, updateProduct, getProduct } = require("../controller/productController")
const router = express.Router()



router.route("/").get(getAllProduct).post(createProduct)
router.route("/:id").delete(deleteProduct).put(updateProduct).get(getProduct)

module.exports = router