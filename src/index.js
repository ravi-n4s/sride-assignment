const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const weatherRoute = require("./controllers/weather");
require("dotenv").config();

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

//routing
app.use("/api/weather", weatherRoute);

//start server
app.listen(port, "0.0.0.0", () => {
  console.log(`app listening at port:${port}`);
});
