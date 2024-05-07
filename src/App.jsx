import { useState } from "react";
import { v4 as uuidv4 } from "uuid";

function App() {
  const [todos, setTodos] = useState([]);
  const [inputValue, setInputValue] = useState("");

  const inputHandler = (e) => {
    setInputValue(e.target.value);
  };

  return (
    <div className="container">
      <div className="input-group">
        <input
          value={inputValue}
          onChange={inputHandler}
          type="text"
          placeholder="Add a Todo"
        />
        <button>+</button>
      </div>
      <div className="todo-item">
        <p className="title"></p>
        <button className="todo-label">DELETE</button>
      </div>
    </div>
  );
}

export default App;
