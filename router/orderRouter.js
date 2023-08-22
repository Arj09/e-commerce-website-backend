const express  = require("express")

const validateToken = require("../middleware/validationtokenHandler")
const { OrderHistory, Orderdetail, Ordernow } = require("../controller/orderController")

const router = express.Router()


router.use(validateToken)
router.route("/").get(Ordernow)
router.route("/orderDetail").get(Orderdetail)
router.route("/orderHistory").get(OrderHistory)

//router.route("/:id").delete(deleteProduct).put(updateCartProduct)

module.exports = router