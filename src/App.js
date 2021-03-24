import './App.css';
import Header from './components/header';
import Tasks from './components/tasks';

import Form from './components/form'
import { useState } from 'react';

function App() {

  const [tasks, setTasks] = useState([]);

  function addTask(newTask) {
    setTasks(prevTasks => {
      return [...prevTasks, newTask];
    })
  }

  function deleteTask(id) {
    //console.log('delte triggered')
    setTasks(prevTasks => {
      return prevTasks.filter((taskItem, index) => {
        return index !== id;
      })
    })
  }

  return (
    <div className="App">
      <Header />
      <Form onAdd={addTask} />
      {tasks.map((tasks, index) => {
        return <Tasks
          key={index}
          id={index}
          title={tasks.title}
          description={tasks.description}
          priority={tasks.priority}
          onDelete={deleteTask}
        />
      })}
    </div>
  );
}

export default App;
