const express = require("express");

const router = express.Router();
const chatController = require('../controller/chat')
const userauthentication = require('../middleware/auth')

router.post('/chat',userauthentication.authenticate,chatController.addmsg)




module.exports = router