import { useState, useEffect } from "react";
import { v4 as uuidv4 } from "uuid";

function App() {
  const [todos, setTodos] = useState(
    JSON.parse(localStorage.getItem("Todos")) || []
  );
  const [inputValue, setInputValue] = useState("");

  const inputHandler = (e) => {
    setInputValue(e.target.value);
  };

  const saveTodo = () => {
    setTodos((prevState) => [
      ...prevState,
      {
        text: inputValue,
        id: uuidv4(),
      },
    ]);

    setInputValue("");
  };

  const deleteTodo = (id) => {
    const filteredTodos = todos.filter((todo) => todo.id !== id);
    setTodos(filteredTodos);
  };

  useEffect(() => {
    localStorage.setItem("Todos", JSON.stringify(todos));
  }, [todos]);

  useEffect(() => {
    const data = JSON.parse(localStorage.getItem("Todos"));
    if (data) {
      setTodos(data);
    }
  }, []);

  return (
    <div className="container">
      <div className="input-group">
        <input
          value={inputValue}
          onChange={inputHandler}
          type="text"
          placeholder="Add a Todo"
        />
        <button onClick={saveTodo}>+</button>
      </div>

      {todos.map((todo) => (
        <div className="todo-item" key={todo.id}>
          <p className="title">{todo.text}</p>
          <button className="todo-label" onClick={() => deleteTodo(todo.id)}>
            DELETE
          </button>
        </div>
      ))}
    </div>
  );
}

export default App;
