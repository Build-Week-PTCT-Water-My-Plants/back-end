const bcrypt = require ('bcrypt')
const jwt = require ('jsonwebtoken')
const router = require("express").Router();
const {jwtSecret} = require('../config/secret')

router.get('/', (req,res, next) => {
    res.status(200).json({message: "hello user"})
    next()
})

router.post("/register", (req, res) => {
    res.status(200).json({message:"Great to have you!"})
})

 router.post('/login', (req,res, next) =>{
     res.status(200).json({message:"Welcome back!"})
     next()
 })

 router.put('/user/:id', (req, res)=> {
     res.status(500).json({message:"Could not update user"})
 })

module.exports = router;