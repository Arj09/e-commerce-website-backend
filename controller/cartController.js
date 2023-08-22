const asyncHandler = require("express-async-handler");
const Cart = require("../model/cartModel")
const Product = require("../model/productModel")




const createCart = asyncHandler( async (req, res)=>{
    const user_id = req.user.id
    const { product_id, quantity } = req.body.ItemStore
   
    const cart = await Cart.findOne({user_id: user_id})
    const product = await Product.findOne({_id:product_id})
    const price = product.price;
    const name = product.title
    
    if(cart){
        const itemIndex = cart.ItemStore.findIndex(p=>p.product_id == product_id)
        
        if(itemIndex > -1){
            console.log("blcok")
               
            let productItem = cart.ItemStore[itemIndex];
                productItem.quantity += +quantity;
                
        }
        else{
            console.log("unblock")
          
            cart.ItemStore.push({product_id , name , price,  quantity})
            
        }
        cart.bill += quantity*price
        await cart.save();
       
        
        
        

    }
    else{
        
       
        const cart = await Cart.create({
            user_id : req.user.id,
            ItemStore: [{product_id, name, price, quantity}],
            bill: quantity*price
    
           
    
        })
        res.status(202).json(cart)


    }
    

    
    
    res.status(202).json(cart)


    

   

    
    

})


const getcartItem = asyncHandler( async (req, res)=>{

    const cart = await Cart.find()
    
    res.send(cart)

})


const updateCartItem = asyncHandler( async (req, res)=>{

    const user_id = req.user.id
    const product_id = req.params.id
    const {  quantity } = req.body.ItemStore
   
    const cart = await Cart.findOne({user_id: user_id})
    const product = await Product.findOne({_id:product_id})
    const price = product.price;
    const name = product.title

    if (cart.user_id.toString() !== user_id) {
        res.status(403);
        throw new Error("User don't have permission to delete this post");
    }

    if(cart){
        const itemIndex = cart.ItemStore.findIndex(p=>p.product_id == product_id)
        
        if(itemIndex > -1){
            console.log("blcok")
               
            let productItem = cart.ItemStore[itemIndex];
                productItem.quantity -= +quantity;
                cart.bill -= quantity*price
                await cart.save();
                
        }
       
       
       
        
        
        

    }
    
    
    res.send(cart)

})


const deleteCartItem = asyncHandler( async (req, res)=>{
    const user_id = req.user.id
    const product_id = req.params.id
    const cart = await Cart.findOne({user_id: user_id})
    const product = await Product.findOne({_id:product_id})

    if (cart.user_id.toString() !== user_id) {
        res.status(403);
        throw new Error("User don't have permission to delete this post");
    }
    if(cart){
        const itemIndex = cart.ItemStore.findIndex(p=>p.product_id == product_id)

        const itemValue = cart.ItemStore[itemIndex].quantity * cart.ItemStore[itemIndex].price
       
        
        const arr = cart.ItemStore.splice(itemIndex, 1)
        cart.bill -= itemValue
        await cart.save()
       
       
       
    }

    
    
    res.send("ok")

})




module.exports = {createCart, getcartItem , updateCartItem, deleteCartItem}