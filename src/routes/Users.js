const express = require('express')
const router = express.Router()
const userController = require('../controller/UserControler')
const ActionsController = require('../controller/ActionsController')


router.post('/signup-user', userController.signUpUser)
router.post('/like-book', ActionsController.likePost)
router.post('/login-user', userController.userLogin)
router.get('/user', userController.getUser)


module.exports = router