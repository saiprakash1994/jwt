// const mongoose = require("mongoose");
// const express = require("express");
// const multer = require("multer");
// const cors = require("cors");
// const bcrypt=require("bcrypt");

// let router = express.Router();
// router.use(cors());
// router.use("uploads", express.static("uploads"));
// const storage = multer.diskStorage({
//   destination: function (req, file, cb) {
//     cb(null, "uploads");
//   },
//   filename: function (req, file, cb) {
//     cb(null, Date.now() + "_" + file.originalname);
//   },
// });

// const upload = multer({ storage: storage });


  
//   let connectBD = async () => {
//     try {
//       await mongoose.connect("mongodb://127.0.0.1:27017/tata");
//       console.log("connect to mongoDb");
//     } catch (error) {
//       console.log("Error in connecting to monoDB");
//       console.log(error);
//     }
//   };
  
//   let employeeSchema = new mongoose.Schema({
//     name: {
//       type: String,
//       required: true,
//       trim: true,
//       minLength: [2, "too small name"],
//       maxLength: [30, "too big name"],
//     },
//     age: {
//       type: Number,
//       min: [18, "min 18 years"],
//       max: [80, "max age is 80 years"],
//       required: true,
//     },
//     email: {
//       type: String,
//       required: true,
//       validate: {
//         validator: function (v) {
//           return /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(
//             v
//           );
//         },
//         message: (props) => `${props.value} is not a valid email!`,
//       },
//     },
//     mobile: {
//       type: String,
//       required: true,
//       validate: {
//         validator: function (v) {
//           return /^(\+91|\+91\-|0)?[789]\d{9}$/.test(v);
//         },
//         message: (props) => `${props.value} is not a valid phone number!`,
//       },
//     },
//     password: String,
//     //   type: String,
//     //   required: true,
//     //   validate: {
//     //     validator: function (v) {
//     //       return /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/.test(v);
//     //     },
//     //     message: (props) => `${props.value} is not a valid password!`,
//     //   },
//     // },
//     gender: {
//       type: String,
//       required: true,
//       default: "male",
//       lowercase: true,
//       enum: ["male", "female"],
//     },
//     martialStatus: {
//       type: String,
//       required: true,
//       default: "single",
//       lowercase: true,
//       enum: ["single", "married"],
//     },
//     profilepic:String,
//   });
//   let Employee1 = new mongoose.model("Employee",employeeSchema1,"Employee");

//   router.post("/validatelogin", upload.none(), async (req, res) => {
//     let data = await Employee1.find({email:`${req.body.email}`});
//  try{

//         let isValidPassword= await bcrypt.compare(req.body.password,data[0].password);
//         if (isValidPassword == true) {

//         //if (req.body.password == results[0].password) {
//           res.json({
//             email: data[0].email,
//             name: data[0].name,
//             profilepic: data[0].profilepic,
//             isLoggedIn: true,
//           }
//           );
//           console.log(data);
//         } else {
//           res.json({
//             msg: "Invalid username and password",
//             isLoggedIn: false,
//           });
//         }
//       }catch(error){
//         res.json(error);
//       }
//       });
 

//   connectBD();
//   module.exports = router;
