import TaskItem from "./TaskItem.jsx";

export default function TaskList({
  tasks,
  deleteTask,
  toggleTask,
  editTask,
}) {
  return (
    <div>
      {tasks.length === 0 && <p>No tasks available</p>}

      {tasks.map((task) => (
        <TaskItem
          key={task.id}
          task={task}
          deleteTask={deleteTask}
          toggleTask={toggleTask}
          editTask={editTask}
        />
      ))}
    </div>
  );
}
