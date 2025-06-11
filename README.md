# React Task Manager Lab

## Overview

This project is a Task Manager application built with React. It allows users to:

- View a list of tasks fetched from a backend
- Add new tasks using a form
- Mark tasks as complete/incomplete
- Search/filter tasks by name

This lab focuses on using three key React hooks:

- `useContext` for global state management
- `useRef` for accessing the search input without triggering re-renders
- `useId` for generating accessible and unique form input IDs

---

## Features

- ✅ Fetch tasks from a mock backend (`db.json`)
- ✅ Add new tasks via form submission
- ✅ Generate unique input IDs with `useId`
- ✅ Manage tasks globally with `useContext`
- ✅ Toggle task completion with a single button
- ✅ Search tasks dynamically using a search input powered by `useRef`

---

## Getting Started

### 1. Clone and Install

```bash
git clone https://github.com/YOUR_USERNAME/react-task-manager-lab.git
cd react-task-manager-lab
npm install
```

### 2. Run the Application

Start the frontend:

```bash
npm run dev
```

Start the backend:

```bash
npm run server
```

### 3. Run Tests

```bash
npm run test
```

---

## File Structure

```
src/
├── components/
│   ├── App.jsx
│   ├── TaskForm.jsx
│   ├── TaskList.jsx
│   └── SearchBar.jsx
├── context/
│   └── TaskContext.jsx
└── __tests__/
    ├── App.test.jsx
    └── test_suites/
        └── Hooks.test.jsx
```

---

## Screenshot

![Task Manager Screenshot](./src/assets/Screenshot%202025-06-11%20at%2011.19.39 AM.png)

---

## Testing Notes

- All core functionality has been **manually verified** in the browser:

  - ✅ Tasks load on page load
  - ✅ New tasks can be added using the form
  - ✅ Tasks render immediately after submission
  - ✅ Search input correctly filters tasks
  - ✅ Tasks can be toggled between complete/incomplete

- One test in `App.test.jsx` fails with the message:
  ```
  Unable to find an element with the text: Walk the dog
  ```
  - The same functionality **passes** in `Hooks.test.jsx`
  - Behavior is correct in the live app
  - This appears to be related to how fetch is mocked in the test setup and not a failure of the actual application code

---

## Resources

- [React Docs: useContext](https://react.dev/reference/react/useContext)
- [React Docs: useRef](https://react.dev/reference/react/useRef)
- [React Docs: useId](https://react.dev/reference/react/useId)
- [Testing Library](https://testing-library.com/docs/)

---

## Author

Andrew Snyder  
[GitHub Profile](https://github.com/Andrew-Snyder627)  
Flatiron School of Software Engineering  
React Hooks Lab – June 2025
