import React from 'react';

const ToDoTask = ({ task, onDelete }) => {
  return (
    <li>
      {task}
      <button onClick={onDelete} style ={{ backgroundColor: "red"}}>Delete</button>
    </li>
  );
};

export default ToDoTask;
