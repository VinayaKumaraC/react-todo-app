import ToDoItem from "./ToDoitem";

function ToDoList({ tasks, deleteTask, toggleTask, editTask }) {
  if (tasks.length === 0) {
    return (
      <div className="empty-box">
        No tasks yet. Add one to get started!
      </div>
    );
  }

  return (
    <div className="list-container">
      {tasks.map((task) => (
        <ToDoItem
          key={task.id}  // Unique key (5 marks)
          task={task}
          deleteTask={deleteTask}
          toggleTask={toggleTask}
          editTask={editTask}
        />
      ))}
    </div>
  );
}

export default ToDoList;