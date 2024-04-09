const ToDoModel = require("../models/ToDoModel");

module.exports.getToDos = async (req, res) => {
  const toDos = await ToDoModel.find();
  res.send(toDos);
};

module.exports.saveToDo = (req, res) => {
  const { toDo, isCompleted } = req.body;

  ToDoModel.create({ toDo, isCompleted })
    .then((data) => {
      console.log("Saved Successfully...");
      res.status(201).send(data);
    })
    .catch((err) => {
      console.log(err);
      res.send({ error: err, msg: "Something went wrong!" });
    });
};

module.exports.updateToDo = (req, res) => {
  const { id } = req.params;
  const { toDo, isCompleted } = req.body;

  ToDoModel.findByIdAndUpdate(id, { toDo, isCompleted })
    .then(() => {
      res.send("Updated Successfully....");
    })
    .catch((err) => {
      console.log(err);
      res.send({ error: err, msg: "Something went wrong!" });
    });
};

module.exports.deleteToDo = (req, res) => {
  const { id } = req.params;

  ToDoModel.findByIdAndDelete(id)
    .then(() => {
      res.send("Deleted Successfully....");
    })
    .catch((err) => {
      console.log(err);
      res.send({ error: err, msg: "Something went wrong!" });
    });
};
