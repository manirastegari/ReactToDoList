const mongoose = require("mongoose");

// Define the ToDo schema
const todoSchema = new mongoose.Schema({
  text: {
    type: String,
    required: true,
  },
});

// Create the ToDo model
const ToDo = mongoose.model("ToDo", todoSchema);

module.exports = ToDo;
