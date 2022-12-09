const express = require("express");
const router = express.Router();

const {
  checkMail
} = require("../controllers/email");

router.route("/").post(checkMail);
module.exports = router;
