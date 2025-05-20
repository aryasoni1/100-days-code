import React, { useReducer, useState } from "react";

//initial state
const initialTodos = [];
function todoReducer(state, action) {
  switch (action.type) {
    case "ADD_TODO":
      return [
        ...state,
        { id: Date.now(), text: action.payload, completed: false },
      ];
    case "TOGGLE_TODO":
      return state.map((todo) =>
        todo.id === action.payload
          ? { ...todo, completed: !todo.completed }
          : todo
      );
    case "DELETE_TODO":
      return state.filter((todo) => todo.id !== action.payload);
    default:
      return state;
  }
}
function TodoApp() {
  const [todos, dispatch] = useReducer(todoReducer, initialTodos);
  const [text, setText] = useState("");
  const handleAdd = () => {
    if (text.trim()) {
      dispatch({ type: "ADD_TODO", payload: text });
      setText("");
    }
  };
  return (
    <div>
      <h1>Todo List (Use Reducer)</h1>
      <input
        type="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Enter Todo"
      />
      <button onClick={handleAdd}>Add</button>
      <ul>
        {todos.map((todo) => (
          <li
            key={todo.id}
            style={{
              textDecoration: todo.completed ? "line-through" : "none",
              cursor: "pointer",
            }}
          >
            <span
              onClick={() =>
                dispatch({ type: "TOGGLE_TODO", payload: todo.id })
              }
            >
              {todo.text}
            </span>
            <button
              onClick={() =>
                dispatch({ type: "DELETE_TODO", payload: todo.id })
              }
            >
              ❌
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}
export default TodoApp;
