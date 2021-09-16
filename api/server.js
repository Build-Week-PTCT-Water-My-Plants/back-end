const express = require('express')
const server = express()

server.use(express.json())

server.use("/api/*", (_,res)=>{
    res.json({message:'Hello from the server side!'})
 })

const currentTime = new Date().toLocaleTimeString();
server.get('/status', (req,res)=>{
    res.status(200).json({
        status: 200,
        message: `Server is up and running at ${currentTime}`
    })
})

module.exports = server