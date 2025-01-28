import React from 'react';
import ToDoTask from './ToDoTask';

const ToDoList = ({ tasks, onDelete }) => {
  return (
    <ul>
      {tasks.map((task, index) => (
        <ToDoTask key={index} task={task} onDelete={() => onDelete(index)} />
      ))}
    </ul>
  );
};

export default ToDoList;
