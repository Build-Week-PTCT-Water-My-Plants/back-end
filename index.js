const dotenv = require("dotenv").config()
//importing server from server.js
const server = require('./api/server')
const cors = require("cors")


const port = process.env.PORT || 5000

const secret = process.env
server.use(cors())


server.listen(port, ()=> {
    console.log(`\n** Server running on port ${port} in ${process.env.NODE_ENV} mode.\n`)
})

console.log("It's alive")
