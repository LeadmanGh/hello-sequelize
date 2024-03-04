const router = require('express').Router()
const jwt = require('jsonwebtoken')

router.get("/", (req,res) =>{
     const user={
         id:1, 
        name: " shella",
     }
    const token = req.header("auth-token")
    jwt.verify(token, "secretkey",(err,decoded) => {
        if(err){ res.status(404).send(err.message)}
          else{ console.log(decoded) ;res.json({user})}
    })
})
module.exports =router