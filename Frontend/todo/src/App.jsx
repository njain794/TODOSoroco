import { useEffect, useState } from "react";
import "./App.css";
import { baseURL } from "./utils/constants";
import axios from "axios";
import Task from "./components/Task";
function App() {
  const [data, setData] = useState([]);
  const [task, setTask] = useState("");
  const [refreshData, setRefreshData] = useState(true);
  useEffect(() => {
    getData();
  }, [refreshData]);

  const getData = () => {
    axios
      .get(`${baseURL}/get`)
      .then((res) => {
        setData(res.data);
      })
      .catch((err) => {
        console.log(err);
      })
      .finally(() => {
        setRefreshData(false);
      });
  };

  const addData = () => {
    if (task.length) {
      setRefreshData(true);
      axios
        .post(`${baseURL}/save`, { toDo: task })
        .then((res) => {
          console.log(res.data);
          //setUpdateUI((prevState) => !prevState);
          setTask("");
        })
        .catch((err) => console.log(err))
        .finally(() => {
          setRefreshData(false);
        });
    } else {
      alert("Task is Empty");
    }
  };

  const deleteData = (id) => {
    setRefreshData(true);
    axios
      .delete(`${baseURL}/delete/${id}`)
      .then((res) => {
        console.log(res.data);
      })
      .catch((err) => console.log(err))
      .finally(() => {
        setRefreshData(false);
      });
  };

  const updateData = (currData) => {
    setRefreshData(true);
    axios
      .put(`${baseURL}/update/${currData._id}`, {
        toDo: currData.toDo,
        isCompleted: !currData.isCompleted,
      })
      .then((res) => {
        console.log(res.data);
      })
      .catch((err) => {
        console.log(err);
      })
      .finally(() => {
        setRefreshData(false);
      });
  };

  const getUncheckedTasks = () => {
    const x = data.reduce((acc, curr) => {
      return (acc += !curr.isCompleted ? 1 : 0);
    }, 0);
    return x;
  };

  const getCheckedTasks = () => {
    const x = data.reduce((acc, curr) => {
      return (acc += curr.isCompleted ? 1 : 0);
    }, 0);
    return x;
  };

  return (
    <div className="headCtr">
      <div className="titleCtr">{"What Do You Want To Do Today ?"}</div>
      {/*Input Tasks*/}
      <div className="inputCtr">
        <input
          value={task}
          className="inputBar"
          type="text"
          placeholder="Add Task"
          onChange={(e) => {
            console.log(e.target.value);
            setTask(e.target.value);
          }}
          onKeyDown={(e) => {
            if (e.key === "Enter") {
              console.log("Record Data and Add");
              addData();
            }
          }}
        />
      </div>
      {/*Iterate Task Data*/}
      {!refreshData ? (
        <div className="taskCtr">
          {data.length ? (
            data.map((curr, i) => {
              return (
                <Task
                  key={i}
                  currData={curr}
                  updateData={updateData}
                  deleteData={deleteData}
                />
              );
            })
          ) : (
            <></>
          )}
        </div>
      ) : (
        <div className="loaderCtr">{"Loading..."}</div>
      )}
      {/*Task Status*/}
      {data.length ? (
        <div className="statusCtr">
          {getUncheckedTasks() ? (
            <div>{`${getUncheckedTasks()} tasks left.`}</div>
          ) : (
            <></>
          )}
          {getCheckedTasks() ? (
            <div>{`Clear ${getCheckedTasks()} completed task.`}</div>
          ) : (
            <></>
          )}
        </div>
      ) : (
        <></>
      )}
    </div>
  );
}

export default App;
