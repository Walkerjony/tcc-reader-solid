const express = require('express')
const router = express.Router()
const userController = require('../controller/UserControler')
const ActionsController = require('../controller/ActionsController')


router.post('/signup-user', userController.signUpUser)
router.post('/like-book', ActionsController.likePost)
router.post('/dislike-book', ActionsController.dislikeBook)
router.post('/login-user', userController.userLogin)
router.post('/update-user/:id', userController.updateUser)
router.get('/getUserById/:id', userController.getUserById)
router.get('/getUser', userController.getUser)
  
module.exports = router