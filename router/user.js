const express = require('express')

const {
    users_get_all,
    users_signup_user,
    users_login_user,
    users_delete_all
} = require('../controller/user')
const router = express.Router()

// get userInfo
router.get('/', users_get_all)

// sign up
router.post('/signup', users_signup_user)

// login
router.post('/login', users_login_user)

// delete userInfo
router.delete('/', users_delete_all)

module.exports = router