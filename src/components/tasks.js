import React from 'react';
//import '../App.css'


function Tasks(props) {

  function deleteHandler() {
    props.onDelete(props.id)
  }
  return (
    <div className="task">
      <h1>{props.title}</h1>
      <p>{props.description}</p>
      <p>Priority: {props.priority}</p>
      <button onClick={deleteHandler}>Delete</button>
    </div>
  );
}

export default Tasks;