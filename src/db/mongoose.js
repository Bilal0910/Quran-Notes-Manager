const mongoose = require("mongoose");
require('dotenv').config({ path: './config/.env' });

// Connect to the database ATLAS
const mongoUrl = process.env.MONGODB_URL;
mongoose
  .connect(mongoUrl)
  .then(() => {
    console.log("Connected to the database!");
  })
  .catch((e) => {
    console.log("Error!", e);
  });
