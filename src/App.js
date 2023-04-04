import React, { useState } from 'react';
import Navbar from './components/Navbar';
import MyForm from './components/MyForm';

// ChatGPT helped me with adding a list. So I can't really take credit for this :(

function App() {
  const [toDos, setToDos] = useState([]);

  function addTask(task) {
    setToDos((prevToDos) => [...prevToDos, task]);
  }

  return (
    <div className="App">
      <Navbar />
      <div className="container">
        <MyForm onSubmit={addTask} />
        <ul>
          {toDos.map((task, index) => (
            <li key={index}>{task.task}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default App;