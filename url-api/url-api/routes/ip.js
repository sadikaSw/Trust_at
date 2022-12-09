const express = require("express");
const router = express.Router();

const {
  createIP,
} = require("../controllers/ip");

router.route("/").post(createIP);

module.exports = router;
