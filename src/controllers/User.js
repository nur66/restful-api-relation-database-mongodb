const mongoose = require('mongoose')
const User = require("../models/User")

exports.createUser = (req, res, next) => {
    console.log('Adding new User')

    var userObj = {
        "_id": new mongoose.Types.ObjectId(),
        "firstName": req.body.firstName,
        "lastName": req.body.lastName,
        "email": req.body.email,
        "address": req.body.address
    }

    var newUser = new User(userObj)
    newUser.save((err, user) => {
        if(err)
            res.status(400).send("There is an error while adding new user")
        else
            res.status(201).json(user)
    })
}