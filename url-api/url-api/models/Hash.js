const mongoose = require("mongoose");
const validator = require("validator");
const JobSchema = new mongoose.Schema(
  {
    hash: {
      type: String,
      required: [true, "Please provide hash address"],
    }
  },
);

module.exports = mongoose.model("Job", JobSchema);
