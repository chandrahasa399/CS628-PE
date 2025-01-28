import React, { useState } from 'react';
import './App.css';
import ToDoList from './ToDoList';

function App() {
  const [tasks, setTasks] = useState([]);
  const [taskInput, setTaskInput] = useState('');

  const handleInputChange = (event) => {
    setTaskInput(event.target.value);
  };

  const handleAddTask = () => {
    if (taskInput.trim() !== '') {
      setTasks([...tasks, taskInput]);
      setTaskInput('');
    }
  };

  const handleDeleteTask = (index) => {
    const updatedTasks = tasks.filter((_, i) => i !== index);
    setTasks(updatedTasks);
  };

  return (
    <div className="App">
      <h1>ToDo List</h1>
      <div>
        <input
          type="text"
          value={taskInput}
          onChange={handleInputChange}
          placeholder="Enter your ToDo description"
        />
        <br />
        <button onClick={handleAddTask}>Add Task</button>
      </div>
      <ToDoList tasks={tasks} onDelete={handleDeleteTask} />
    </div>
  );
}

export default App;