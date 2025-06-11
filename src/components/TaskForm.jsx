import React, { useState, useId, useContext } from "react";
import { TaskContext } from "../context/TaskContext";

// Form component for submitting new tasks
function TaskForm() {
  const [taskName, setTaskName] = useState("");
  const id = useId(); // Generate unique ID for accessibility
  const { addTask } = useContext(TaskContext); // Access addTask from the context

  function handleSubmit(e) {
    e.preventDefault();
    if (taskName.trim() === "") return;
    addTask(taskName.trim());
    setTaskName(""); // Clear input after submission
  }

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor={id}>New Task:</label>
      <input
        type="text"
        value={taskName}
        onChange={(e) => setTaskName(e.target.value)}
        placeholder="Add a new task..."
      />
      <button type="submit">Add Task</button>
    </form>
  );
}

export default TaskForm;
