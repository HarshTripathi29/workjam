const mongoose = require('mongoose');

mongoose.connect('mongodb+srv://harshtripathi042:harsh123@cluster0.etqbz6r.mongodb.net/workjam')
.then(()=>{console.log("mongodb connected")})
.catch((error)=>{console.log("error connecting to db: ", error)});


const userSchema = new mongoose.Schema({
    firstname : String,
    lastname : String,
    email : String,
    password : String
})

const User = mongoose.model("User", userSchema);

module.exports = User;


