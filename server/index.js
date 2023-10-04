const express = require("express");
const app = express();
const mongoose = require("mongoose");
const cors = require("cors");
const bodyParser = require("body-parser");
const PORT = 3001;

mongoose.connect("mongodb+srv://francesdonaire:frances1234@todo-task.lbkk95d.mongodb.net/todo-task?retryWrites=true&w=majority", {

  useNewUrlParser: true,
  useUnifiedTopology: true,

});


const Task = require('./model/task');


app.use(cors());
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.post("/addTask", async(req, res) => {

  const task = req.body.task

  try {

    const addTask = new Task ({
      task: task
    })

    await addTask.save();

    console.log("success")

  } catch(error) {

    console.log(error)

  }


})

app.get("/getTask", async(req, res) => {

  try {

    const getTask = await Task.find({});

    res.send(getTask)

  } catch(error) {

    console.log(error)

  }

})

app.delete("/deleteTask/:id", async (req, res) => {

  const id = req.params.id

  try {

    await Task.deleteOne({ _id: id});

    console.log("deleted success")


  } catch(error) {

    console.log(error)

  }

})

app.put("/updateTask", async(req, res) => {

  const id = req.body.id;
  const task = req.body.task

  try {


     await Task.findByIdAndUpdate(id, {task: task});

    console.log("updated")


  } catch(error) {


    console.log(error)

  }


})

app.listen(PORT, () => {

  console.log("server is running at", PORT)

})