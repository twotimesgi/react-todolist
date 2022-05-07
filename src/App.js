import React, { useState } from 'react';
import './App.css';
import InputComponent from './components/InputComponent';
import TaskItem  from './components/TaskItem';

function App() {
  const initial_tasks = [
    { name: "Create your first task!", done: true }
  ];

  const [tasks, setTasks] = useState(initial_tasks);
  function submitHandler(data){
    setTasks(prev => {
      return [...prev, data];
    });
  }

  function handleCheck(index){
    tasks[index].done = !tasks[index].done;
    setTasks([...tasks]);
  }

  return (
    <div className="container">
      <InputComponent onSubmit={submitHandler}/>

      { tasks.map( (item, index) => <TaskItem key={index} onCheck={handleCheck} item={item} index={index}/> ) }
    </div>
  );
}

export default App;
