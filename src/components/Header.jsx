import { useState } from "react";

function Header({ addTask }) {
  const [input, setInput] = useState("");

  const handleSubmit = () => {
    addTask(input);
    setInput("");
  };

  return (
    <div className="header-container">
      <h1>✅ My Tasks</h1>
      <p>Stay organized and track your daily tasks</p>

      <div className="input-box">
        <input
          type="text"
          placeholder="Add a new task..."
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
        <button onClick={handleSubmit}>+ Add</button>
      </div>
    </div>
  );
}

export default Header;