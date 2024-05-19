const mongoose = require("mongoose")

async function dbconnect() {
    //write your username and password link this link given in 
    // database connection
    mongoose.connect("mongodb+srv://<username>:<password>@cluster0.97qgfru.mongodb.net/")
    // mongoose.connect("mongodb://localhost:27017")
}
module.exports = dbconnect