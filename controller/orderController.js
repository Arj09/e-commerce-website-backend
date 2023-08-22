const asyncHandler = require("express-async-handler");
const Cart = require("../model/cartModel")
const Order = require("../model/orderModel")




const Ordernow = asyncHandler( async (req, res)=>{
   
    
    
    res.status(202).json("oder")


    

   

    
    

})


const OrderHistory = asyncHandler( async (req, res)=>{

    const cart = await Cart.find()
    
    res.send("historuy")

})


const Orderdetail = asyncHandler( async (req, res)=>{

   
    
    res.send("detail")

})





module.exports = {Ordernow, OrderHistory, Orderdetail }