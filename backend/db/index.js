const mongoose = require('mongoose')

mongoose.connect('mongodb+srv://20b128:o8iVzWGwaHtHuvLA@cluster0.ivlvtvt.mongodb.net/')
.then(() => {
    console.log('Connected to MongoDB')
})
.catch((err) => {
    console.log(err)
})