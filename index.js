const express = require("express")
const app = express()

//Routes
const apiRoute = require("./routes/apiRoute")


//Middleware
app.use(express.urlencoded({extended:false}))
app.use(express.json())
app.use("/api",apiRoute)

app.get("/",(req,res)=>res.send("hello world"))

app.listen(3000,()=>console.log("server started successfully"))
