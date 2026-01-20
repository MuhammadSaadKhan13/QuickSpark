import { useState, useEffect } from "react";
import TaskForm from "./components/TaskForm.jsx";
import TaskList from "./components/TaskList.jsx";

export default function App() {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    const saved = JSON.parse(localStorage.getItem("tasks"));
    if (saved) setTasks(saved);
  }, []);

  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);

  const addTask = (task) => setTasks([...tasks, task]);

  const deleteTask = (id) =>
    setTasks(tasks.filter((t) => t.id !== id));

  const toggleTask = (id) =>
    setTasks(
      tasks.map((t) =>
        t.id === id ? { ...t, completed: !t.completed } : t
      )
    );

  const editTask = (id, title) =>
    setTasks(
      tasks.map((t) =>
        t.id === id ? { ...t, title } : t
      )
    );

  return (
    <div className="container">
      <h1>QuickSpark</h1>
      <TaskForm addTask={addTask} />
      <TaskList
        tasks={tasks}
        deleteTask={deleteTask}
        toggleTask={toggleTask}
        editTask={editTask}
      />

      <style>{`
        body {
          font-family: Arial, sans-serif;
          background: #f4f4f4;
        }
        .container {
          max-width: 600px;
          margin: 40px auto;
          background: #45a6f5;
          padding: 20px;
          border-radius: 6px;
        }
        h1 {
          text-align: center;
        }
      `}</style>
    </div>
  );
}
