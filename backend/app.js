const express = require("express")
const mongoose = require("mongoose")
const categoryRoutes = require("./routes/category")
const brandRoutes = require("./routes/brand")
const app = express()
const port = 3000;
const cors = require("cors")
const productRoutes = require("./routes/product")
const customerRoutes = require("./routes/customer")
const authRoutes = require("./routes/auth")
const { verifyToken, isAdmin } = require("./middleware/auth-middleware")

app.use(cors())
app.use(express.json())

app.get('/', (req, res)=>{
    res.send("server runs")
})

app.use("/category",verifyToken,isAdmin, categoryRoutes)
app.use("/brand",verifyToken,isAdmin, brandRoutes)
app.use("/product",verifyToken,isAdmin, productRoutes)
app.use("/customer",verifyToken,customerRoutes)
app.use("/auth",authRoutes)


async function connectDb() {
    await mongoose.connect("mongodb://localhost:27017",{dbName: "e-comm-store-db"})
    console.log("DB connected")
}
connectDb().catch((err)=>{
    console.log(err)
})

app.listen(port, ()=>{
    console.log(`server runs on http://localhost:${port}`)
})