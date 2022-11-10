const User = require("../model/User");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");


exports.Add_User = async (req, res) => {
  try {
    const user = await User.findOne({ mobileNo: req.body.mobileNo });
    if (user) {
      return res.status(400).json({ message: "User already exists" });
    }

    const newUser = await User.create(req.body);

    if (!newUser) {
      return res.status(400).json({ message: "User creation failed" });
    }
    return res.status(200).json({ message: "User created successfully" });
  } catch (err) {
    return res
      .status(500)
      .json({ error: err, message: "Internal Server Error" });
  }
};

exports.Login_User = async (req, res) => {
  try {
    console.log(req.body);
    const user = await User.findOne({ mobileNo: req.body.mobileNo });
    if (!user) {
      return res
        .status(400)
        .json({ message: "User doesn't exist/ Login_User first" });
    }
    const isPasswordValid = bcrypt.compareSync(
      req.body.password,
      user.password
    );
    if (!isPasswordValid) {
      return res.status(400).json({ message: "Invalid password" });
    }
    const { _id, mobileNo, firstname } = user;
    const JWTtoken = jwt.sign({ _id, mobileNo, firstname }, req.app.get('secretKey'), {
      expiresIn : '2h'
    });
    return res
      .status(200)
      .json({ token: JWTtoken, message: "Login successfull" });
  } catch (err) {
    return res
      .status(500)
      .json({ error: err, message: "Internal Server Error" });
  }
};

exports.Add_Order = async (req, res) => {
  try {
    
    Add_Order = user_id = req => mobileNo;
    Add_Order =  sub_total = req => Pay_total;
    const user = await User.findOne({ mobileNo: req.body.mobileNo });
    if (user) {
      return res.status(400).json({ message: "User already exists" });
    }

    const newUser = await User.create(req.body);

    if (!newUser) {
      return res.status(400).json({ message: "User creation failed" });
    }
    return res.status(200).json({ message: "User created successfully" });
    
   
  } catch (err) {
    return res
      .status(500)
      .json({ error: err, message: "Internal Server Error" });
  }
};

exports.testApi =  (req, res) => {
  console.log('test api');
  return res.json({message: "You are verified"});
} 