const dotenv = require("dotenv").config()
const express = require("express")
const cors = require("cors")

const app = express()
const port = process.env.PORT || 5000

app.use(cors())
app.use(express.json())

app.use("/api/*", (_,res)=>{
    res.json({data:"The API is working!"})
})

app.listen(port, ()=> {
    console.log(`Server running on port ${port}`)
})

console.log("It's alive")
console.log(__dirname)//directory name of the folder where index.js is found. It is important because it allows us to know which directory heroku is using during deployment
console.log(__filename)
console.log(process.env.USER)
console.log(process.env.PORT)