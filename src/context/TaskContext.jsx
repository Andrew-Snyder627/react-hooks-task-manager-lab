import React, { createContext, useEffect, useState } from "react";

// Create the context to share task data and actions across the app
export const TaskContext = createContext();

export function TaskProvider({ children }) {
  const [tasks, setTasks] = useState([]);

  // Load tasks from the backend on initial mount
  useEffect(() => {
    fetch("http://localhost:6001/tasks")
      .then((response) => response.json())
      .then(setTasks);
  }, []);

  // Toggle a task to completed status and persist the change to the backend
  function toggleComplete(id) {
    const updatedTasks = tasks.map((task) =>
      task.id === id ? { ...task, completed: !task.completed } : task
    );
    setTasks(updatedTasks);

    const toggledTask = updatedTasks.find((task) => task.id === id);
    fetch(`http://localhost:6001/tasks/${id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ completed: toggledTask.completed }),
    });
  }

  // Add a new task to state and backend
  function addTask(title) {
    const newTask = {
      title,
      completed: false,
    };
    fetch("http://localhost:6001/tasks", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newTask),
    })
      .then((response) => response.json())
      .then((data) => {
        // Ensure we preserve title due to test failure
        const task = { ...data, title: data.title || title };
        setTasks((previous) => [...previous, task]);
      });
  }

  const value = {
    tasks,
    toggleComplete,
    addTask,
  };

  return <TaskContext.Provider value={value}>{children}</TaskContext.Provider>;
}
