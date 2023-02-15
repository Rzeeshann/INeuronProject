const express = require('express')

const router = express.Router()

const userController = require('../controllers/user')

router.post('/post',userController.postDetails)

router.get('/get',userController.getDetails)

router.delete('/delete/:email',userController.deleteUser)

module.exports = router;