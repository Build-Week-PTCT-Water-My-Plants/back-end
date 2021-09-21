const router = require("express").Router();

router.get('/', (req,res, next) => {
    res.status(200).json({message: "hello user"})
    next()
})

router.post("/register", (req, res) => {
    res.status(200).json({message:"Great to have you!"})
})

 router.post('/login', (req,res) =>{
     res.status(200).json({message:"Welcome back!"})
 })

 router.put('/user/:id', (req, res)=> {
     res.status(500).json({message:"Could not update user"})
 })

module.exports = router;