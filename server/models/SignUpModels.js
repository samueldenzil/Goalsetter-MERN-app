const mongoose = require("mongoose");

const signUpTemplate = new mongoose.Schema({
  fullName: {
    type: String,
    required: true,
  },
  username: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  date: {
    // this field will not be visible but everytime user signs up a date will be generated
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model("mytable", signUpTemplate); // table name and schema that we will be creating
