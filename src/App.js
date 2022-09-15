import React, { useState } from "react";
import "./App.css";
import Header from "./Component/Header/Header";
import Form from "./Component/Form/Form";
import Tasks from "./Component/Tasks/Tasks";

function App() {
  const [tasks, setTasks] = useState([]);

  // Add Task
  const AddTask = (task) => {
    const id = Math.round(Math.random() * 10000 + 1);
    const output = { id, ...task };
    setTasks([...tasks, output]);
  };

  // Delete Task
  const deleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id));
  };

  return (
    <div className="container">
      <div className="app-section">
        <Header></Header>
        <Form AddTask={AddTask}></Form>
        <Tasks tasks={tasks} ondelete={deleteTask}></Tasks>
      </div>
    </div>
  );
}

export default App;
