import React from 'react';

// I got this form from the rect docs

export default function MyForm({ onSubmit }) {
  function handleSubmit(e) {
    // preventp page reload
    e.preventDefault();

    // Converting into JSON format
    const form = e.target; // Returns element on which event was triggered
    const formData = new FormData(form); // Makes form key/val pairs
    const formJson = Object.fromEntries(formData.entries()); // Makes object from iterator of key/val pairs, returns all form field values in JSON format

    onSubmit(formJson);

    // Clears form 
    form.reset();
  }

  return (
    <form method="post" onSubmit={handleSubmit}>
      <label>
        Enter Task: <input name="task" required />
      </label>
      <button type="submit">Add Task To List</button>
    </form>
  );
}
