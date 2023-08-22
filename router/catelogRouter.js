const express  = require("express")
const { updateCatelog, getCatelog, deleteCatelog, getAllCatelog, createCatelog } = require("../controller/catelogController")
const validateToken = require("../middleware/validationtokenHandler")
const router = express.Router()



router.route("/").get(getAllCatelog).post(createCatelog)
router.route("/:id").delete(deleteCatelog).put(updateCatelog).get(getCatelog)

module.exports = router