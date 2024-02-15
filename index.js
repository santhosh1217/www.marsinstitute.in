const express = require("express")
const app = express()
const path = require("path")

//Routes
const apiRoute = require("./routes/apiRoute")


//Middleware
app.use(express.urlencoded({extended:false}))
app.use(express.json())
app.use(express.static(path.join(__dirname,"public")))
app.use("/api",apiRoute)

app.get("/",(req,res)=>res.sendFile(path.join(__dirname,"public","index.html")))

app.listen(3000,()=>console.log("server started successfully"))
//comment
