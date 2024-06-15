const express = require('express');
const connectDB=require("./DBconfig")
const bodyParser = require('body-parser');
const cors = require('cors');
const apiRoutes = require('./routes/api');
const path =require("path")

const port=1000;
const app = express();

// Middleware
app.use(bodyParser.json());
app.use(cors());

//db connected
connectDB();

// Routes
app.use('/api', apiRoutes);

// app.get("/",(req,res)=>{
//   res.send("<h1>express</h1>")
// })

app.get("/",(req,res)=>{
  app.use(express.static(path.resolve(__dirname,"frontend","build")))
  res.sendFile(path.resolve(__dirname,"frontend","build","index.html"))
})

app.listen(port,(req,res)=>{
  console.log(`server is running on http://localhost:${port}`)
})