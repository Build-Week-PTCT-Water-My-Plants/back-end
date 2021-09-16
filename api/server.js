const express = require('express');
//Middleware Libraries
const helmet = require('helmet');
const morgan = require('morgan');
const cors = require('cors');

//Server created
const server = express();

//plantRouter import
const plantRouter = require('../routes/plantRouter')
server.use('/plants',plantRouter);

server.use(express.json());
server.use(helmet());
server.use(morgan("dev"));
server.use(cors());

//Test endpoints
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