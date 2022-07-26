const router = require("express").Router();
const user = require("../model/usermodel");
const bcrypt = require("bcrypt");

router.post("/register", async (req, res) => {
  try {
    //generate new password

    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(req.body.password, salt);
    //create new user
    const newUser = new user({
      name: req.body.name,

      email: req.body.email,
      password: hashedPassword,
      phone: req.body.phone,
    });

    //save user return response

    const users = await newUser.save();
    res.status(201).json(users);
  } catch (err) {
    res.status(500).json(err);
    console.log(err);
  }
});
//Login
//LOGIN
router.post("/login", async (req, res) => {
  try {
    const users = await user.findOne({ email: req.body.email });
    !users && res.status(404).json("user not found");
    if (users) {
      const validPassword = await bcrypt.compare(
        req.body.password,
        users.password
      );
      !validPassword && res.status(400).json("wrong password");
      if (validPassword) {
        const { password, ...others } = users._doc;
        res.status(200).json(others);
      }
    }
  } catch (err) {
    res.status(500).send({ message: err });
  }
});
module.exports = router;
