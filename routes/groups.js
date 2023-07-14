const express = require("express");
const router = express.Router();

const middleware = require("../middleware/auth");
const groupController = require("../controller/group");

router.post("/creategroup",middleware.authenticate,groupController.createGroup);
router.get('/fetchgroups',middleware.authenticate,groupController.fetchGroup)
module.exports = router;
