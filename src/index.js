const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const path = require("path");
const fs = require("fs");
const isDatePrimeMiddleware = require("./middleware/isPrime");
require("dotenv").config();

// const config = require("../config");
// const handleErrors = require("./middleware/error");
// const constants = require("./common/constants");

const app = express();
const port = process.env.PORT || 3000;
const connStr = process.env.connStr;

//initialise db
mongoose.connect(
  connStr,
  {
    useUnifiedTopology: true,
    useNewUrlParser: true,
  },
  (err, Obj) => {
    if (err) console.log("DB connection error ---- ", err);
    else console.log("connected to DB");
  }
);

//middleware
app.use(cors());
app.use(express.json());
app.use(
  express.urlencoded({
    extended: true,
  })
);
app.use(isDatePrimeMiddleware);

//routing
fs.readdirSync(path.join(__dirname, "controllers")).forEach((api) => {
  const controller = api.slice(0, -3);
  app.use(`/api/${controller}`, require(`./controllers/${controller}`));
  console.log(`route initialised- api/${controller}`);
});

//initial route
app.get("/", (req, res) => {
  res.send("Hello World");
});

//start server
app.listen(port, "0.0.0.0", () => {
  console.log(`app listening at port:${port}`);
});
