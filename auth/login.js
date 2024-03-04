const router = require('express').Router()
const {Sequelize, Op} = require('sequelize')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
const Users = require('../models/Users')

//Global

router.post('/login', async (req,res) => {
     const { email, password} = req.body
     const token = jwt.sign({email}, 'secretkey', {expiresIn:"1h"} ) 
     const user = await Users.findAll({ where: {email:email}})
          try{
               if(user === undefined)
               {res.status(404).send("user not found")}
          } catch(err)
            { console.log(err)}
          const passCompare = await bcrypt.compare(password, user[0].password)
            if(passCompare){res.header("auth-token", token); res.status(200).json(user); }
               else{ res.status(404).send({message:'password does not match retype it'})}   
   
   
})

module.exports = router;