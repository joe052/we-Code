const express = require('express');
const app = express();
app.use(express.static("warmup"));
const port = 9000;
app.listen(port,()=>{
  console.log("we shall revisit");
})