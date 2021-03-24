import React, { useState } from 'react';
//import '../App.css';


function Form(props) {

  const [task, setTask] = useState({
    title: "",
    description: "",
    priority: 0
  });

  function taskHandler(e) {
    const { name, value, priority } = e.target;

    setTask(prevTask => {
      return {
        ...prevTask,
        [name]: value,
        [priority]: priority
      }
    });
  }

  function submitTask(e) {
    props.onAdd(task);
    setTask({
      title: "",
      description: "",
      priority: 0
    })
    e.preventDefault();
  }

  function cancelTask(e) {
    setTask({
      title: "",
      description: "",
      priority: 0
    })
    e.preventDefault();
  }
  return (
    <div>
      <form>
        <input name="title" onChange={taskHandler} value={task.title} placeholder="task title..."></input>
        <textarea name="description" onChange={taskHandler} value={task.description} placeholder="task description..." rows="3"></textarea>
        <br></br>
        <h4><u>Priority:</u></h4>
        <input type="radio" id="high" name="priority"></input>
        <label for="high">High</label>
        <input type="radio" id="medium" name="priority"></input>
        <label for="medium">Medium</label>
        <input type="radio" id="low" name="priority"></input>
        <label for="low">Low</label>
        <br></br>
        <button onClick={submitTask}>Save</button>
        <button onClick={cancelTask}>Cancel</button>
      </form>
    </div>
  );
}

export default Form;