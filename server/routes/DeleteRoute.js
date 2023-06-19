// const mongoose = require("mongoose");
// const express = require("express");
// const cors = require("cors");
// const bcrypt=require("bcrypt");

// let router = express();
// router.use(cors());

// router.get("/deleteUser", (req, res) => {
//     let query = `delete from login where email=${req.query.email}`;
//     connection.query(query, (err, results) => {
//       if (err) {
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