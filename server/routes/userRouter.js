const router = require('express').Router()
const { 
    userRegister,
    userLogin,
    checkEmail,
    submitNewPassword
    } = require('../controllers/userAuthController')

router.post('/signup', userRegister)

router.post('/login', userLogin)

router.post('/check-email', checkEmail)

router.post('/submit-new-password', submitNewPassword)

module.exports = router