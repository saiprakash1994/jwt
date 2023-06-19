const express = require("express");
const cors = require("cors");
const signupRoute = require("./routes/SignUpRoute");
const loginRoute = require("./routes/LoginRoute");
const updateRoute = require("./routes/UpdateRoute");
const delRoute = require("./routes/DeleteRoute");
const dotenv = require("dotenv");
dotenv.config();

let app = express();
app.use(cors());
app.use("/", signupRoute);
// app.use("/", loginRoute);
//app.use("/", updateRoute);
//app.use("/", delRoute);
const PORT = process.env.PORT || 2233

app.listen( 
  PORT,
  console.log(
    `Server running in ${process.env.NODE_ENV} mode on port ${PORT}`
  )
)