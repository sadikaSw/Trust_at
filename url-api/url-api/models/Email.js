const mongoose = require("mongoose");

const EmailSchema = new mongoose.Schema(
  {
    email: {
      type: String,
      required: [true, "Please provide email"],
    }
  },
);

module.exports = mongoose.model("Note", EmailSchema);
