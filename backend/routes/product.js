const express = require('express');
const router = express.Router()
const { addProduct, deleteProduct, getAllProducts, getProduct, updateProduct } = require('../handlers/product-handler');

router.post("/", async (req,res)=>{
    let model = req.body;
    let result = await addProduct(model)
    res.send(result)
})

router.put("/:id", async (req,res)=>{
    let model = req.body;
    let id = req.params.id;
    await updateProduct(id,model)
    res.send({message:"Updated"})
})


router.delete("/:id", async(req,res)=>{
    let id = req.params["id"]
    await deleteProduct(id);
    res.send({message: 'deleted'})
})

router.get("", async (req,res)=>{
    let products = await getAllProducts()
    res.send(products)
})

router.get("/:id", async (req,res)=>{
    let id = req.params["id"]
    let product = await getProduct(id);
    res.send(product)
})


module.exports = router