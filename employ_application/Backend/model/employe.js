var mongoose = require('mongoose')
var schema = mongoose.Schema({
    Name: String,
    Age: Number,
    Dept: String,
    Sal:Number
})
var EmployModel = mongoose.model("employee", schema);
module.exports = EmployModel;