const express  = require('express')
const dotenv = require('dotenv').config()
const errorHandler = require("./middleware/errorhandler");
const connectDB = require('./config/dbConnection');


connectDB()
const app = express()


const port = process.env.PORT || 5001

app.use(express.json());
app.use("/api/user/category", require('./router/catelogRouter'))
app.use("/api/user/product", require("./router/productRouter"))
app.use("/api/user/addtocart", require("./router/cartRouter"))
app.use("/api/user/order", require("./router/orderRouter"))
app.use("/api/user", require('./router/userRouter'))
app.use(errorHandler)

app.listen(port, (req, res)=>{
    console.log("server is running on port : ", port)
})