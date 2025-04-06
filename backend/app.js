const express = require("express")
const mongoose = require("mongoose")
const categoryRoutes = require("./routes/category")
const app = express()
const port = 3000;
const cors = require("cors")

app.use(cors())
app.use(express.json())

app.get('/', (req, res)=>{
    res.send("server runs")
})

app.use("/category",categoryRoutes)

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