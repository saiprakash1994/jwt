const mongoose = require("mongoose");
const express = require("express");
const multer = require("multer");
const cors = require("cors");
const bcrypt = require("bcrypt");
const dotenv = require("dotenv");
const jwt = require("jsonwebtoken");
const asyncHandler = require("express-async-handler");

dotenv.config();
let router = express.Router();

router.use(cors());
router.use("/uploads", express.static("uploads"));
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "uploads");
  },
  filename: function (req, file, cb) {
    cb(null, Date.now() + "_" + file.originalname);
  },
});

const upload = multer({ storage: storage });

let connectBD = async () => {
  try {
    //await mongoose.connect("mongodb://127.0.0.1:27017/tata");
    await mongoose.connect(process.env.MONGO_URI);

    console.log("connect to mongoDb");
  } catch (error) {
    console.log("Error in connecting to monoDB");
    console.log(error);
  }
};

let employeeSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    trim: true,
    minLength: [2, "too small name"],
    maxLength: [30, "too big name"],
  },
  age: {
    type: Number,
    min: [18, "min 18 years"],
    max: [80, "max age is 80 years"],
    required: true,
  },
  email: {
    type: String,
    required: true,
    validate: {
      validator: function (v) {
        return /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(
          v
        );
      },
      message: (props) => `${props.value} is not a valid email!`,
    },
  },
  mobile: {
    type: String,
    required: true,
    validate: {
      validator: function (v) {
        return /^(\+91|\+91\-|0)?[789]\d{9}$/.test(v);
      },
      message: (props) => `${props.value} is not a valid phone number!`,
    },
  },
  password: String,
  //   type: String,
  //   required: true,
  //   validate: {
  //     validator: function (v) {
  //       return /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/.test(v);
  //     },
  //     message: (props) => `${props.value} is not a valid password!`,
  //   },
  // },
  gender: {
    type: String,
    required: true,
    default: "male",
    lowercase: true,
    enum: ["male", "female"],
  },
  martialStatus: {
    type: String,
    required: true,
    default: "single",
    lowercase: true,
    enum: ["single", "married"],
  },
  profilepic: String,
});
let Employee = new mongoose.model("Employee", employeeSchema, "Employee");

router.post(
  "/validatelogin",
  upload.single("profilepic"),
  asyncHandler(async (req, res) => {
    let data = await Employee.find({ email: `${req.body.email}` });
    //let correctURL = data[0].profilepic.replace("uploads/", "uploads/");

    try {
      let isValidPassword = await bcrypt.compare(
        req.body.password,
        data[0].password
      );
      if (isValidPassword == true) {
        //if (req.body.password == results[0].password) {
        console.log(data);
        let jwtToken = await jwt.sign({ _id: data[0]._id }, "sai");
        console.log(jwtToken);

        res.json({
          email: data[0].email,
          name: data[0].name,
          profilepic: data[0].profilepic,
          isLoggedIn: true,
          token: jwtToken,
        });
      } else {
        res.json({
          msg: "Invalid username and password",
          isLoggedIn: false,
        });
      }
    } catch (error) {
      res.json(error);
    }
    console.log(data[0]);
    console.log(data[0].profilepic);
  })
);
router.put("/updateDetails", upload.single("profilepic"), async (req, res) => {
  let hashedPassword = await bcrypt.hash(req.body.password, 10);
  try {
    let data = await Employee.findOneAndUpdate(
      { email: `${req.body.email}` },
      {
        $set: {
          password: `${hashedPassword}`,
          profilepic: `${req.file.path}`,
          new: true,
        },
      }
    );
    res.json("USER UPDATED");
    console.log(data);
  } catch (error) {
    res.json(error);
  }
});
router.post("/validateToken", upload.none(), async (req, res) => {
  let receivedToken = req.body.token;
  let generatedId = await jwt.verify(receivedToken, "sai");
  console.log(generatedId);
  let data = await Employee.find({ _id: `${generatedId._id}` });

  console.log("first");
  console.log(data);
  try {
    let isValidPassword = await bcrypt.compare(
      req.body.password,
      data[0].password
    );
    if (isValidPassword == true) {
      //if (req.body.password == results[0].password) {
      console.log(data);
      let jwtToken = await jwt.sign({ _id: data[0]._id }, "sai");
      console.log(jwtToken);

      res.json({
        email: data[0].email,
        name: data[0].name,
        profilepic: data[0].profilepic,
        isLoggedIn: true,
        token: jwtToken,
      });
    } else {
      res.json({
        msg: "Invalid username and password",
        isLoggedIn: false,
      });
    }
  } catch (error) {
    res.json(error);
  }
});
router.delete("/deleteUser", upload.none(), async (req, res) => {
  try {
    let data = await Employee.deleteMany({ email: `${req.body.email}` });
    res.json(data);
    console.log(data);
  } catch (error) {
    res.json(error);
  }
});
router.post("/signup", upload.single("profilepic"), async (req, res) => {
  let hashedPassword = await bcrypt.hash(req.body.password, 10);
  let data = new Employee({
    name: req.body.name,
    age: req.body.age,
    email: req.body.email,
    mobile: req.body.mobile,
    gender: req.body.gender,
    martialStatus: req.body.martialStatus,
    password: hashedPassword,
    profilepic: req.file.path,
  });
  try {
    Employee.insertMany([data]);
  } catch (error) {
    console.log(error);
    console.log("error in saving data");
  }
  console.log(data);
  res.json(["user created"]);
});

connectBD();
module.exports = router;
