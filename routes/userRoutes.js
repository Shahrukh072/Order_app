const express = require('express');
const { Add_User, Login_User, Add_Order, testApi } = require('../controller/userController');
const { validateJwt } = require('../middleware/jwt');
const router = express.Router();

router.post("/Add_User" , Add_User)
router.post("/Login_User" , Login_User)
// router.post("/Add_Order" , Add_Order)
router.post("/test" , validateJwt, testApi)

module.exports = router;