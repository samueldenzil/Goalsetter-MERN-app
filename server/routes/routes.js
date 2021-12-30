const express = require("express");
const router = express.Router();
const signUpTemplateCopy = require("../models/SignUpModels");
const bcrypt = require("bcrypt");

router.post("/signup", async function (req, res) {
  const saltPassword = await bcrypt.genSalt(10);
  const securePassword = await bcrypt.hash(req.body.password, saltPassword);

  const signedUpUser = new signUpTemplateCopy({
    fullName: req.body.fullName,
    username: req.body.username,
    email: req.body.email,
    password: securePassword,
  });

  signedUpUser
    .save() // this function will save the data
    .then((data) => {
      // if everting was correct then send the data in JSON format
      res.json(data);
    })
    .catch((error) => {
      // if an error occured then send the error in JSON format
      res.json(error);
    });
});

module.exports = router;
