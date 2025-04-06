const Brand = require("./../db/brand")

async function getBrands() {
    let brands = await Brand.find()
    return brands.map(x=>x.toObject())
}

async function getBrands(id) {
    let brands = await Brand.findById(id)
    return brands.toObject()
}

