import React, { useState } from 'react';
import ToDoList from './components/ToDoList';
import './App.css';

function App() {
  const [tasks, setTasks] = useState([]);

  const addTask = (task) => {
    setTasks([...tasks, { text: task, isCompleted: false }]);
  };

  const deleteAllTasks = () => {
    setTasks([]);
  };

  const toggleTask = (index) => {
    const newTasks = [...tasks];
    newTasks[index].isCompleted = !newTasks[index].isCompleted;
    setTasks(newTasks);
  };

  const deleteTask = (index) => {
    const newTasks = tasks.filter((_, i) => i !== index);
    setTasks(newTasks);
  };

  return (
    <div className="app">
      <ToDoList 
     tasks={tasks} 
     onAddTask={addTask} 
     onToggleTask={toggleTask} 
     onDeleteTask={deleteTask}
     onDeleteAll={deleteAllTasks}
      />
    </div>
  );
}

export default App;
