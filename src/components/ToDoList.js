import React, { useState } from "react";

export default function ToDoList() {
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState();

  // Does the same as above
  // const stateArr = useState([]); // [ [], function() {  } ]
  // const tasks = stateArr[0];
  // const setTasks = stateArr[1];

  function addTask() {
    const tasksCopy = tasks.slice(0);
    tasksCopy.push(newTask);
    setTasks(tasksCopy);
  }

  function removeTask(index) {
    const tasksCopy = tasks.slice(0);
    tasksCopy.splice(index, 1);
    setTasks(tasksCopy);
  }

  function updateNewTask(e) {
    const newValue = e.target.value;
    setNewTask(newValue);
  }

  return (
    <div>
      <h3>To do list</h3>

      <ul>
        {tasks.map((task, index) => (
          <li key={index.toString()}>
            {task} <button onClick={() => removeTask(index)}>X</button>
          </li>
        ))}
      </ul>

      <div>
        <input type="text" onChange={updateNewTask} />
        <button onClick={addTask}>Add task</button>
      </div>
    </div>
  );
}
