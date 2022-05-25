const express = require("express");
const router = express.Router();
const controller = require("../controller/dse")

router.get("/", controller.getHomePage);
router.post("/submitForm", controller.postHomePage);

module.exports = router;