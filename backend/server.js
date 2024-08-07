const express = require("express");
const colors = require("colors");
const dotenv = require("dotenv");
const morgan =require("morgan");
const app = express();
const path= require("path");

const PORT = 5000;

app.get("/", (req, res) => { 
  res.send("Hello World"); 
});

app.listen(PORT, () =>{
  console.log(`Server running on port ${PORT}`.yellow.bold)
});
