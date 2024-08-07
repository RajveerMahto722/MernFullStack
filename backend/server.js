// const express = require("express");
// const colors = require("colors");
// const dotenv = require("dotenv").config();
// const morgan =require("morgan");
// const app = express();
// const userdata =require("./utlity/userdata.json")
// const fileURLtoPath=require("url");
// const path= require("path");
// const { connect } = require("http2");
// const connectDB = require("./db");
// // properties of express has been transferd into app.

// const PORT = process.env.PORT || 5000;

// connectDB();

// app.use(express.json()); // use take one paremeter at a time

// //static file wala middleware
// app.use(express.static(path.resolve(__dirname,"./Public")));

// app.get("/userdata", (req, res) => { /// it take 2 paremeter. 1 route 1 one function 
//   res.send(userdata);
// });
// app.get("/", (req, res) => { 
//   res.sendFile(path.resolve(__dirname, "./public", "index.html"));
// });
// app.get("/contacts", (req, res) => { 
//   res.sendFile(path.resolve(__dirname, "./public", "contacts.html"));
// });
// app.get("/stopwatch", (req, res) => { 
//   res.sendFile(path.resolve(__dirname, "./public", "stopwatch.html"));
// });
// app.listen(PORT, () =>
//   console.log(`Server running on port ${PORT}`.yellow.bold)
// );





//basic files and setup for backend.
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
