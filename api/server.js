const express = require('express');
const helmet = require('helmet');
const morgan = require('morgan');
const cors = require('cors');
const server = express();

server.use(express.json());
server.use(helmet());
server.use(morgan("dev"));
server.use(cors());


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