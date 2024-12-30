const express = require("express");
require("dotenv").config();
const app = express();
const cors = require("cors");
const bodyParser = require("body-parser");
const mainRouter = require("./routers/mainRouter");
const connentDB = require("./utils/db");

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());
connentDB(process.env.MONGODB_URI);

app.use("/api/v1", mainRouter);

app.listen(process.env.PORT, () =>
  console.log(`Server listening on port ${process.env.PORT}`)
);
