const express = require('express')
const { body } = require('express-validator')
const UserController = require('../controllers/User')

const router = express.Router()

router.post('/addUser', UserController.createUser)

module.exports = router