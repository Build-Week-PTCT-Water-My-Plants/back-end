const router = require("express").Router();

router.get('/', (req,res) => {
    res.status(200).json({message: "hello user"})
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