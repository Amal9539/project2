var mongoose = require('mongoose')
mongoose.connect('mongodb+srv://amalp9539:amal@cluster0.hgvzq.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0')
    .then(() => {
        console.log("connected")
    })
    .catch((err) => {
        console.log(err)
    })
