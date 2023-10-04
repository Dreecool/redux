const mongoose = require("mongoose");


const TaskSchema = new mongoose.Schema({

  task: {
    type: String,
    required: true
  }


})


const Mytask = mongoose.model("Task", TaskSchema);

module.exports = Mytask