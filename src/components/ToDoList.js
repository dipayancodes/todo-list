import React, { useState, useRef, useEffect } from 'react';
import ToDoItem from './ToDoItem';

function ToDoList({ tasks, onAddTask, onToggleTask, onDeleteTask, onDeleteAll }) {
  const [newTask, setNewTask] = useState('');
  const textAreaRef = useRef(null);

  const handleAdd = () => {
    if (newTask.trim() !== '') {
      onAddTask(newTask);
      setNewTask('');
    }
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleAdd();
    }
  };

  const adjustHeight = () => {
    const element = textAreaRef.current;
    element.style.height = 'auto';
    element.style.height = element.scrollHeight + 'px';
  };


  return (
    <div className="todo-list">
      <div className="input-container">
        <textarea 
          ref={textAreaRef}
          value={newTask} 
          onChange={(e) => { 
            setNewTask(e.target.value);
            adjustHeight();
          }} 
          onKeyPress={handleKeyPress}
          placeholder="Add a new task..."
          rows="1"
        />
        <button onClick={handleAdd}>Add</button>
      </div>
      {tasks.length >= 2 && (
        <button className="delete-all" onClick={onDeleteAll}>Delete All</button>
      )}
      {tasks.map((task, index) => (
        <ToDoItem 
          key={index} 
          task={task} 
          onToggle={() => onToggleTask(index)} 
          onDelete={() => onDeleteTask(index)}
        />
      ))}
    </div>
  );
}

export default ToDoList;