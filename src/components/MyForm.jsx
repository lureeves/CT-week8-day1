export default function MyForm() {
    function handleSubmit(e) {
      // Prevent the browser from reloading the page
      e.preventDefault();
  
      // Read the form data
      const form = e.target;
      const formData = new FormData(form);
  
      // Or you can work with it as a plain object:
      const formJson = Object.fromEntries(formData.entries());
      console.log(formJson);  
    }
    return (
      <form method="post" onSubmit={handleSubmit}>
        <label>
          Enter Task: <input name="myInput" />
        </label>
        <button type="submit">Add Task To List</button>
      </form>
    );
  }