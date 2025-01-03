const express = require("express");
const cors = require("cors"); // Import CORS
const userRouter = require("./routers/user");
const taskRouter = require("./routers/task");
require("./db/mongoose");
require("dotenv").config({ path: "./config/.env" });

// Define express app and port
const app = express();
const port = process.env.PORT;

// Use CORS middleware
app.use(cors());


app.use(express.json());
app.use(userRouter);
app.use(taskRouter);

// Start server and listen on port
app.listen(port, () => {
  console.log(`Server is up on port ${port}`);
});
