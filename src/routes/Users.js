const express = require('express')
const router = express.Router()

const userController = require('../controller/UserControler')

// Cadastro do cliente
router.post('/signup-user', userController.signUpUser)

// Login do cliente
router.post('/login-user', userController.userLogin)


module.exports = router