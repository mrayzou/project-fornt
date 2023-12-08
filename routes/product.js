const express = require('express');
const Product = require('../models/product');
const router = express.Router();


router.post("/add_products",async(req, res) => {
    try {
        const { productName, description, price , imageUrl } = req.body; 
        const newProduct = new Product({ productName, description, price , imageUrl }); 
        await newProduct.save(); 
        res.status(200).send({ msg: "prodcut added", newProduct });
    } catch (error) {
        res.status(400).send({ msg: "product not added", error }); 
    }
});

router.get("/get_product/:_id", async (req, res) => {
    try {
       const cleanedId = req.params._id.trim();
        
        const productToGet = await Product.findOne({ _id: cleanedId });
        
        res.status(200).send({ msg: "product getted", productToGet });
    } catch (error) {
        res.status(400).send({ msg: "can not get this product", error });
    }
});

router.delete("/delete_product/:_id",async(req,res)=>{
    try {
        const {_id} = req.params
        await Product.findOneAndDelete({_id})
        res.status(200).send({msg : "product deleted"})
    } catch (error) {
        res.status(400).send({msg : "can not delete this product",error})
        
    }
})

router.put('/update_product/:_id', async (req, res) => {
    try {
        const { _id } = req.params;

        const updatedProduct = await Product.updateOne({_id},{$set:{...req.body}});


        res.status(200).send({ msg: 'Product updated', updatedProduct});
    } catch (error) {
        console.error(error);
        res.status(500).send({ msg: 'Internal Server Error', error });
    }
});


router.get("/get_products",async(req,res)=>{
    try {
        const productlist = await Product.find()
        res.status(200).send({msg : "list",productlist})
    } catch (error) {
        res.status(400).send({msg : "can not get list",error})
    }
    
    
    })

    module.exports = router;