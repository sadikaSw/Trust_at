const express = require("express");
const router = express.Router();

const {
  createHash
} = require("../controllers/hash");

router.route("/").post(createHash);

module.exports = router;
