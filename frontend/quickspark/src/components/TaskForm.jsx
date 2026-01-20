import { useState } from "react";

export default function TaskForm({ addTask }) {
  const [title, setTitle] = useState("");
  const [priority, setPriority] = useState("Low");

  const submitHandler = (e) => {
    e.preventDefault();
    if (!title) return;

    addTask({
      id: Date.now(),
      title,
      priority,
      completed: false,
    });

    setTitle("");
    setPriority("Low");
  };

  return (
    <>
      <form className="form" onSubmit={submitHandler}>
        <input
          type="text"
          placeholder="Enter task"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />

        <select onChange={(e) => setPriority(e.target.value)}>
          <option>Low</option>
          <option>Medium</option>
          <option>High</option>
        </select>

        <button>Add Task</button>
      </form>

      <style>{`
        .form {
          display: flex;
          gap: 10px;
          margin-bottom: 20px;
        }
        .form input,
        .form select {
          flex: 1;
          padding: 8px;
        }
        .form button {
          padding: 8px 14px;
        }
        @media (max-width: 600px) {
          .form {
            flex-direction: column;
          }
        }
      `}</style>
    </>
  );
}
