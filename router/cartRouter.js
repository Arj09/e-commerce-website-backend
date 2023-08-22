const express  = require("express")

const validateToken = require("../middleware/validationtokenHandler")
const { createCart, getcartItem, deleteProduct, updateProduct, updateCartProduct, updateCartItem, deleteCartItem } = require("../controller/cartController")
const router = express.Router()


router.use(validateToken)
router.route("/").post(createCart).get(getcartItem)
router.route("/:id").put(updateCartItem).delete(deleteCartItem)
//router.route("/:id").delete(deleteProduct).put(updateCartProduct)

module.exports = router