const mongoose = require('mongoose')

const {Schema , model} = mongoose ;

const ProductSchema = new Schema({
    productName: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    price: {
        type: Number,
        type: String,
        required: true
    },
    imageUrl: {
        type: String,  
        required: true
    },
});
module.exports = Product = model("Product", ProductSchema);
