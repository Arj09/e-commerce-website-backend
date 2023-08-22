const asyncHandler = require("express-async-handler");
const Category = require("../model/catelogModel")




const createCatelog = asyncHandler( async (req, res)=>{
    const { category_name} = req.body
    console.log(req.body)

    if(!category_name ){
        res.status(400)
        throw new Error("all filed all mandatory")
    }

    const category = await Category.create({
        category_name
       

    })
    res.status(202).json(category)

})

const updateCatelog = asyncHandler( async (req, res)=>{
    const category = await Category.findById(req.params.id);

    if(!category){
        res.status(404);
        throw new Error('category not found');
    }

    if (category.user_id.toString() !== req.user.id) {
        res.status(403);
        throw new Error("User don't have permission to delete this post");
    }
    const updateCategory = await Category.findByIdAndUpdate(
        req.params.id,
        req.body,
        {
            new: true
        }
    )

    
    res.status(200).json(updateCategory);

})
const getAllCatelog = asyncHandler( async (req, res)=>{

    const category = await Category.find()
    res.send(category)

})
const getCatelog = asyncHandler( async (req, res)=>{

    const category = await Category.findById(req.params.id);

    if(!category){
        res.status(404);
        throw new Error('category not found');
    }

    
    res.status(200).json(category);
   

})
const deleteCatelog = asyncHandler( async (req, res)=>{
    const category = await Category.findById(req.params.id);

    if(!category){
        res.status(404);
        throw new Error('category not found');
    }
    /*

    if (category.user_id.toString() !== req.user.id) {
        res.status(403);
        throw new Error("User don't have permission to delete this post");
    }
    */
    await Category.findByIdAndRemove(
        req.params.id
    )
    res.status(200).json(category);

})

module.exports = {createCatelog , getAllCatelog, getCatelog , deleteCatelog, updateCatelog}