const mongoose = require('mongoose')
const Schema = mongoose.Schema

const userSchema = new Schema({
    fullname: {
        type: String,
        required: true,
        unique: true,
        minlength: 3

    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true,
        minlength: 4
    }
})

module.exports = mongoose.model('User', userSchema)