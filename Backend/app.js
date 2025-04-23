const express = require("express");
const app = express();

//var express= require("express")
//var app =express()

// let express= require("express")
// let app =express()

app.get("/", (req, res) => {
  res.send("Hello World from Backend");
});
app.get("/about", (req, res) => {
  res.send("Hello from about page of Backend");
});
//let app=require("express")()

app.listen(3000, () => {
  console.log("Server/Backend is running on port 3000");
});

// app.listen(3000,function(){
//     console.log("Server is running on port 3000")
// } )
