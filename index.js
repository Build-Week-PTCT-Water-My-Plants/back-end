const dotenv = require("dotenv").config()
const express = require("express")
const server = require('./api/server')
const cors = require("cors")


const port = process.env.PORT || 5000

const secret = process.env
server.use(cors())
server.use(express.json())

server.use("/api/*", (_,res)=>{
    res.json({data:"The API is working!"})
})

server.listen(port, ()=> {
    console.log(`Server running on port ${port}`)
})

console.log("It's alive")
