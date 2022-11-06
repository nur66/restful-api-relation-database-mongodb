const mongoose = require('mongoose')
const Schema = mongoose.Schema

module.exports = mongoose.model('User', Schema({
    _id: Schema.Types.ObjectId,
    firstName: {
        type: String,
        required: true,
        validate: {
            validator: function(text) {
                return text.length > 0
            },
            message: "Empty first name is not allowed"
        }
    },
    lastName: {
        type: String,
        required: true,
        validate: {
            validator: function(text) {
                return text.length > 0
            },
            message: "Empty last name is not allowed"
        }
    },
    email: {
        type: String,
        required: true,
        validate: {
            validator: function(text) {
                return text.length > 0
            },
            message: "Empty email is not allowed"
        }
    },
    address: {
        type: String,
        // required: true,
        validate: {
            validator: function(text) {
                return text.length > 0
            },
            message: "Empty address is not allowed"
        }
    },
}))