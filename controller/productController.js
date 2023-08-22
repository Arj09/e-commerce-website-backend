const asyncHandler = require("express-async-handler");
const Product = require("../model/productModel")




const createProduct = asyncHandler( async (req, res)=>{
    const { title, price, description, availability, category_id} = req.body
    console.log(req.body)

    if(!title || !price || !description || !availability || !category_id){
        res.status(400)
        throw new Error("all filed all mandatory")
    }

    const product = await Product.create({
        title,
        price,
        description,
        availability,
        category_id

       

    })
    res.status(202).json(product)

})

const updateProduct = asyncHandler( async (req, res)=>{
    const product = await Product.findById(req.params.id);

    if(!product){
        res.status(404);
        throw new Error('product not found');
    }
    /*

    if (category.user_id.toString() !== req.user.id) {
        res.status(403);
        throw new Error("User don't have permission to delete this post");
    }*/
    const updateproduct1 = await Product.findByIdAndUpdate(
        req.params.id,
        req.body,
        {
            new: true
        }
    )

    
    res.status(200).json(updateProduct1);

})
const getAllProduct = asyncHandler( async (req, res)=>{

    const product = await Product.find()
    res.send(product)

})
const getProduct = asyncHandler( async (req, res)=>{

    const product = await Product.findById(req.params.id);

    if(!product){
        res.status(404);
        throw new Error('product not found');
    }

    
    res.status(200).json(product);
   

})

const deleteProduct = asyncHandler( async (req, res)=>{
    const product = await Product.findById(req.params.id);

    if(!product){
        res.status(404);
        throw new Error('product not found');
    }
    /*

    if (category.user_id.toString() !== req.user.id) {
        res.status(403);
        throw new Error("User don't have permission to delete this post");
    }
    */
    await Product.findByIdAndRemove(
        req.params.id
    )
    res.status(200).json(product);

})

module.exports = {createProduct, updateProduct, getAllProduct, getProduct, deleteProduct}