const express = require('express');
const CustomerAuth = require('../controller/customer-auth-controller');

const router = express.Router();
const customerAuth = new CustomerAuth();

console.log("INDSIDE SERVER ROUTES");
router.post('/signup', customerAuth.createUser);
router.post('/login', customerAuth.fetchUser);
router.post('/forget', customerAuth.forgetPassword);
router.post('/createnewpassword', customerAuth.createNewPassword)
router.post('/reset-password', customerAuth.updateUser);

module.exports = router;
