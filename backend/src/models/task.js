const mongoose = require("mongoose");

// Define the schema
const taskSchema = mongoose.Schema({
  description: {
    type: String,
    required: true,
    trim: true,
  },
  completed: {
    type: Boolean,
    default: false,
  },
  owner: {
    type: mongoose.Schema.Types.ObjectId,
    required: true,
    ref: "User",
  },
}, {
  timestamps: true
});

// Define the model
const Task = mongoose.model("Task", taskSchema);

module.exports = Task;
