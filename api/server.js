const express = require('express');
//Middleware Libraries
const helmet = require('helmet');
const morgan = require('morgan');
const cors = require('cors');

//Server created
const server = express();

//plantRouter & authRouter import
const plantRouter = require('../routes/plantRouter')
const authRouter = require('../auth/authRouter')
server.use('/api/plants',plantRouter);
server.use('/api/auth', authRouter);

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