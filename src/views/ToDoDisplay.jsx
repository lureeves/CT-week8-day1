import React, { useState } from 'react';
import MyForm from '../components/MyForm';

export default function ToDoDisplay() {
    const [toDos, setToDos] = useState([]);

    function addTask(task) {
    setToDos((prevToDos) => [...prevToDos, task]);
    }

    return (
        <div>
            <MyForm onSubmit={addTask} />
            <ul>
                {toDos.map((task, index) => (
                    <li key={index}>{task.task}</li>
                ))}
            </ul>
        </div>
    );
}
