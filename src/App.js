import React from 'react';
import Navbar from './components/Navbar';
// import Button from './components/Button';
import MyForm from './components/MyForm';
import { useState } from 'react';

function App() {
  const [toDos, setToDos] = useState([]);

  // function handleClick() {
  //   console.log("Button clicked");
  // }

  function addToDo(toDo) {
    setToDos([...toDos, toDo]);
  }

  return (
    <div className="App">
      <Navbar />
      <div className="container">
        {/* Make sure the Button component is imported */}
        {/* <Button onClick={handleClick} /> Make sure onClick is properly passed */}
        <MyForm />
      </div>
    </div>
  );
}

export default App;