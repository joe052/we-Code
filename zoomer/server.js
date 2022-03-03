const express = require('express');
const app = express();
const port = 8000;

app.use(express.static('zoomer'));
app.listen(port,()=>{
  console.log("Welcome to the dark side!!");
});