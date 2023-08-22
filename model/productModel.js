const mongoose = require('mongoose')

const productSchema = mongoose.Schema({

    title: {
        type: String,
        required: [true, "Please add title name "],
    },
    price: {
        type: String,
        required: [true, "Please add price name "],
    },
    description: {
        type: String,
        required: [true, "Please add description name "],
    },
    availability: {
        type: String,
        required: [true, "Please add availability name "],
    },
    category_id: {
        type: String,
        required: [true, "Please add category_id name "],
    },
   
},{
    timestamps : true
})

module.exports = mongoose.model("Product", productSchema)