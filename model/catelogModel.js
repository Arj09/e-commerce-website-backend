const mongoose = require('mongoose')

const catelogSchema = mongoose.Schema({

    

    category_name: {
        type: String,
        required: [true, "Please add category name "],
    },
   
},{
    timestamps : true
})

module.exports = mongoose.model("Category", catelogSchema)