//retrieve
let mongoose = require('mongoose')
// Connect to the db
mongoose.set('useCreateIndex',true)
mongoose.set('useNewUrlParser',true)
mongoose.connect("mongodb://localhost:27017/exampleDb", function (err, db) {
    if (!err) { console.log("We are connected") }
})


let CustomerSchema = new mongoose.Schema({
    name: String,
    email: {
        type: String,
        required: true,
        unique: true
    }
})
module.exports = mongoose.model("Customer",CustomerSchema)