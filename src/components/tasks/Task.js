import React from "react";
import "./Tasks.css";
import Collapsible from "../collapsible/Collapsible";
import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import action from "../../actions";
const Task = () => {
  const tasks = useSelector((state) => state.taskReducer);
  console.log(tasks);
  /// state
  const [taskTitle, setTaskTitle] = useState("");
  const [taskDateTime, setTaskDateTime] = useState("");
  const [isNewTaskOpen, setIsNewTaskOpen] = useState(false);

  //dispatch
  const dispatch = useDispatch();

  const onSaveClick = () => {
    dispatch(
      action.createTask({
        id: Math.floor(Math.random() * 1000000),
        taskTitle: taskTitle,
        taskDateTime: taskDateTime,
      })
    );
    setTaskTitle("");
    setTaskDateTime("");
    setIsNewTaskOpen(!isNewTaskOpen);
  };
  const onCancelClick = () => {
    setIsNewTaskOpen(!isNewTaskOpen);
  };
  const onDeleteClick=(task)=>{
    if(window.confirm("Are you Want to delete")){
      dispatch(action.deleteTask(task.id))
    }

  }
  return (
    <div className="outer-container">
      <div className="container">
        <div className="app-title-container">
          <div className="app-title">
            <h1>Task</h1>
          </div>
          <div className="create-button-container">
            {!isNewTaskOpen ? (
              <button
                className="button create-button"
                onClick={() => {
                  setIsNewTaskOpen(!isNewTaskOpen);
                }}
              >
                <i className="fa fa-calendar-plus"></i>
                &nbsp;&nbsp; Create
              </button>
            ) : null}
          </div>
        </div>
        <Collapsible isOpen={isNewTaskOpen}>
          <div className="new-task-container">
            <h4 className="new-task-title">New Task</h4>

            {/* Form group start here */}
            <div className="form-group">
              <label className="form-label" htmlFor="task-title">
                Task Title:
              </label>
              <div className="form-input">
                <input
                  type="text"
                  placeholder="Task Title"
                  className="text-box"
                  id="task-title"
                  value={taskTitle}
                  onChange={(e) => {
                    setTaskTitle(e.target.value);
                  }}
                />
              </div>
            </div>

            {/* Form group end here */}
            {/* Form group start here */}
            <div className="form-group">
              <label className="form-label" htmlFor="task-title">
                Task Date and Time:
              </label>
              <div className="form-input">
                <input
                  type="datetime-local"
                  placeholder="Task Title"
                  className="text-box"
                  id="task-date-time"
                  value={taskDateTime}
                  onChange={(e) => {
                    setTaskDateTime(e.target.value);
                  }}
                />
              </div>
            </div>

            {/* Form group end here */}
            <div className="button-group">
              <button
                className="button save-button"
                onClick={() => {
                  onSaveClick();
                }}
              >
                <i className="fa fa-save"></i>
                &nbsp; &nbsp; SaveTask
              </button>

              <button
                className="button cancel-button"
                onClick={() => {
                  onCancelClick();
                }}
              >
                <i className="fa fa-window-close"></i>
                &nbsp;&nbsp; Cancel
              </button>
            </div>
          </div>
        </Collapsible>
        <div className="search-box">
          <input type="search" placeholder="search" />
          <i className="fa fa-search"></i>
        </div>
        <div className="content-body">
          {/* Task start */}
          {tasks.map((task) => (
            <div className="task" key={task.id}>
              <div className="task-body">
                <div className="task-title">
                  <i className="fa fa-thumbtack"></i>
                  <span className="task-title-text">{task.taskTitle}</span>
                </div>
                <div className="task-subtitle">
                  <i className="far fa-clock"></i>
                  <span className="task-subtitle-text">
                    {task.taskDateTime}
                  </span>
                </div>
              </div>
              <div className="task-options">
                <button
                  className="icon-button"
                  title="Delete"
                  onClick={() => {
                    onDeleteClick(task);
                  }}
                >
                  &times;
                </button>
              </div>
            </div>
          ))}

          {/* Task end */}
        </div>
      </div>
    </div>
  );
};

export default Task;
