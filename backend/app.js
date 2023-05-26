const express = require('express'); // to built backend quickly
const app = express(); //lisence of express
const cors = require('cors'); //to cross orginal policies
const PORT = 8745
app.use(cors()); // app.use(cors()) means use this cors package when server starts up
require("./db")

app.listen(PORT, ()=>{
    console.log(`server is running on port ${PORT}`)
})