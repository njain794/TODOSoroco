import React from "react";
import { LuDelete } from "react-icons/lu";
import "../App.css";

const Task = ({ currData, updateData, deleteData, key }) => {
  return (
    <div className="taskWrapper" key={key}>
      <div className={`taskData ${currData.isCompleted ? "completed" : ""}`}>
        <input
          type="checkbox"
          checked={currData.isCompleted}
          onChange={() => {
            updateData(currData);
          }}
        ></input>
        <div>{currData.toDo}</div>
      </div>
      <button
        className="delButton"
        onClick={() => {
          deleteData(currData._id);
        }}
      >
        <LuDelete size={25} />
      </button>
    </div>
  );
};

export default Task;
