import './InputComponent.css';
import React, {useState} from 'react';

function InputComponent(props){

  const [newTaskName, setNewTaskName] = useState("");
  const [error, setError] = useState("");

  function newTaskHandler(event){
    setNewTaskName(event.target.value);
  }

  function addTask(event){
      event.preventDefault();
      if(newTaskName.trim() !== ""){
        props.onSubmit({name: newTaskName, done: false});
        setNewTaskName("");
        if(error) setError("");
      }else{
        setError("Task name is not valid.")
      }
  };

    return (
        <div>
            <form onSubmit={addTask}>
                <input value={newTaskName} name="name" onChange={newTaskHandler} placeholder="Task Name" type="text"/>
                <button >Add Task</button>
            </form>
                
            { error && (
                    <p className="error"> {error} </p>
                )}
        </div>
    )
}

export default InputComponent;