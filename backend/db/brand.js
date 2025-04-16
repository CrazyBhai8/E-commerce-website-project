const mongoose = require("mongoose");

const brandSchema = new mongoose.Schema({
    name: String,
});

const Brand = mongoose.models.brands || mongoose.model('brands', brandSchema);

module.exports = Brand;
