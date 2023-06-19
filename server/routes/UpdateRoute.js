// const mysql = require("mysql");
// const express = require("express");
// const multer = require("multer");
// const cors = require("cors");
// const bcrypt=require("bcrypt");

// let router = express.Router();
// router.use(cors());
// router.use("/uploads", express.static("uploads"));
// const storage = multer.diskStorage({
//   destination: function (req, file, cb) {
//     cb(null, "uploads");
//   },
//   filename: function (req, file, cb) {
//     cb(null, Date.now() + "_" + file.originalname);
//   },
// });

// const upload = multer({ storage: storage });
// router.put("/updateDetails", upload.single("profilepic"), async (req, res) => {
//     let hashedPassword =await bcrypt.hash(req.body.password,10);
  
//     console.log(req.body);
//     let query = `update login set password='${hashedPassword}',profilepic='${req.file.destination}/${req.file.filename}' where email='${req.body.email}'`;
//     console.log(query);
//     connection.query(query, (err, results) => {
//       if (err) {
//         res.json(err);
//         console.log(err);
//       } else {
//         res.json(results);
//       }
//     });
//   });
//   let connection = mysql.createConnection({
//     host: "localhost",
//     user: "root",
//     password: "root",
//     database: "saiprakash_01",
//     port: 3306,
//   });
//   connection.connect((err) => {
//     if (err) {
//       console.log(err);
//     } else {
//       console.log("connected to data base");
//     }
//   });
//   module.exports = router;
