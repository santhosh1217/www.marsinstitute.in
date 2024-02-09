const express = require("express")
const route = express.Router()
const {register} = require("../services/apiService")


route.post("/register",(req,res)=>
{
  
    register(req,res)
})

module.exports = route