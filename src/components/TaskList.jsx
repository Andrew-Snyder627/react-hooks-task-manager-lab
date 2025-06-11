import React, { useContext } from "react";
import { TaskContext } from "../context/TaskContext";

// Component to display the list of tasks
function TaskList({ query }) {
  const { tasks, toggleComplete } = useContext(TaskContext);

  // Filter tasks based on the search query
  const filteredTasks = tasks.filter((task) => {
    const title = task.title || "";
    return title.toLowerCase().includes(query.toLowerCase());
  });

  return (
    <ul>
      {filteredTasks.map((task) => (
        <li key={task.id}>
          <span
            style={{ textDecoration: task.completed ? "line-through" : "none" }}
          >
            {task.title}
          </span>
          <button data-testid={task.id} onClick={() => toggleComplete(task.id)}>
            {task.completed ? "Undo" : "Complete"}
          </button>
        </li>
      ))}
    </ul>
  );
}

export default TaskList;
