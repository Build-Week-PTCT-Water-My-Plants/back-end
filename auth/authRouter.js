const bcrypt = require ('bcrypt')
const jwt = require ('jsonwebtoken')
const router = require("express").Router();
const {jwtSecret} = require('../config/secret')
const Users = require('./usersModel')
const authPayload = require('./payload-middleware')

router.get('/', (req,res, next) => {
    res.status(200).json({message: "hello user"})
    next()
})

router.post("/register", authPayload, (req, res,next) => {
    res.status(200).json({message:"Great to have you!"})
    next()
})
//authPayload should go after '/login'
 router.post('/login', (req,res, next) =>{ 
//     let { username, password } = req.body;

//   Users.findBy({ username }) //usersModel incomplete without a db
//     .then(([user]) => {
//       if (user && bcrypt.compareSync(password, user.password)) {
//         const token = makeToken(user)
//         res.status(200).json({
//           message: `Welcome back ${user.username}!`,
//           token
//         });
//       } else {
//         next({ status: 401, message: 'Invalid Credentials' });
//       }
//     })
//     .catch(next);

     res.status(200).json({message:"Welcome back!"})
     next()
 })

 router.put('/user/:id', (req, res)=> {
     res.status(500).json({message:"Could not update user"})
 })

 function makeToken(user){
    const payload = {
      subject: user.id,
      username: user.username,
      role: user.role
    }
    const options = {
      expiresIn: "500s"
    }
    return jwt.sign(payload,jwtSecret,options)
  }
  

module.exports = router;