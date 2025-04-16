const Product = require("./../db/product")

async function addProduct(model) {
    let product = new Product({
        ...model
    })
    await product.save()
    return product.toObject() 
}

async function updateProduct(id,model) {
    await Product.findByIdAndUpdate({_id:id},model) // (id,model)
}

async function deleteProduct(id){
    await Product.findByIdAndDelete(id)
}

async function getAllProducts (){
    let products = await Product.find()
    return products.map(p => p.toObject())
}

async function getProduct (id){
    let product = await Product.findById(id)
    return product.toObject()
}


async function getNewProducts() {
    let newProducts = await Product.find({
        isNewProduct:true
    })
    return newProducts.map((x)=>x.toObject())
}

async function getFeaturedProducts() {
    let featuredProduct = await Product.find({
        isFeatured:true
    })
    return featuredProduct.map((x)=>x.toObject())
}

module.exports ={addProduct, updateProduct,deleteProduct,getAllProducts,getProduct,getNewProducts,getFeaturedProducts};