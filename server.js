import express from "express";

const app = express()

app.get("/", (req, res)=>{
    res.send("HelloWorld")
})

app.listen(5000, (req, res) =>{
    console.log("Hello");
})