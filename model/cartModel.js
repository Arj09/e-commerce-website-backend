const mongoose = require('mongoose')

const productCartSChema = mongoose.Schema({


    user_id: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: "User",
    },

    ItemStore :[
        {
            product_id : { type: mongoose.Schema.Types.ObjectId, required: true, ref: "Product", },
            name: {type: String},
            quantity: { type: Number, default : 1},
            price: { type: Number}

        }
    ],
    bill: {
        type: Number,
        required: true,
        default: 0
    }
 
},{
    timestamps : true
})

module.exports = mongoose.model("productCart", productCartSChema)