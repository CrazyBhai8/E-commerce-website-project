const mongoose = require("mongoose")
const productSchema = new mongoose.Schema({
    name: String,
    shotDescription: String,
    description : String,
    purchagePrice: Number,
    sellingPrice: Number,
    images: Array(String),
    categoryId: { type: Schema.Types.ObjectId, ref: 'categories' }

});

const product = mongoose.model('products', userSchema)
module.exports = product