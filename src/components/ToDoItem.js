import React from 'react';

function ToDoItem({ task, onToggle, onDelete }) {
  return (
    <div className={`todo-item ${task.isCompleted ? 'completed' : ''}`}>
      <span onClick={onToggle}>{task.text}</span>
      <button className="delete-button" onClick={onDelete}>Delete</button>
    </div>
  );
}

export default ToDoItem;
