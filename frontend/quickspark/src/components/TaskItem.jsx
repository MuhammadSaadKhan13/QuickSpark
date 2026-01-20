import { useState } from "react";

export default function TaskItem({
  task,
  deleteTask,
  toggleTask,
  editTask,
}) {
  const [edit, setEdit] = useState(false);
  const [text, setText] = useState(task.title);

  return (
    <>
      <div className={`task ${task.completed ? "done" : ""}`}>
        <input
          type="checkbox"
          checked={task.completed}
          onChange={() => toggleTask(task.id)}
        />

        {edit ? (
          <input
            value={text}
            onChange={(e) => setText(e.target.value)}
          />
        ) : (
          <span>
            {task.title} ({task.priority})
          </span>
        )}

        {edit ? (
          <button
            onClick={() => {
              editTask(task.id, text);
              setEdit(false);
            }}
          >
            Save
          </button>
        ) : (
          <button onClick={() => setEdit(true)}>Edit</button>
        )}

        <button onClick={() => deleteTask(task.id)}>
          Delete
        </button>
      </div>

      <style>{`
        .task {
          display: flex;
          align-items: center;
          gap: 10px;
          margin-bottom: 10px;
        }
        .done span {
          text-decoration: line-through;
          color: gray;
        }
      `}</style>
    </>
  );
}
