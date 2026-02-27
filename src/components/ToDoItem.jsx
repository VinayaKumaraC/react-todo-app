import { useState } from "react";

// Toggle task completion status
function ToDoItem({ task, deleteTask, toggleTask, editTask }) {
  const [isEditing, setIsEditing] = useState(false);
  const [editText, setEditText] = useState(task.text);

  const handleEdit = () => {
    editTask(task.id, editText);
    setIsEditing(false);
  };

  return (
    <div className="task-item">
      <input
        type="checkbox"
        checked={task.completed}
        onChange={() => toggleTask(task.id)}
      />

      {isEditing ? (
        <input
          value={editText}
          onChange={(e) => setEditText(e.target.value)}
        />
      ) : (
        <span className={task.completed ? "completed" : ""}>
          {task.text}
        </span>
      )}

      {isEditing ? (
        <button onClick={handleEdit}>Save</button>
      ) : (
        <button onClick={() => setIsEditing(true)}>Edit</button>
      )}

      <button onClick={() => {
        if (window.confirm("Are you sure you want to delete this task?"))
          {
            deleteTask(task.id);
          }
        }}
      >
        Delete
      </button>
    </div>
  );
}

export default ToDoItem;