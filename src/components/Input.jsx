import React from "react";
import "./input.css";
import Todo from "./Todo";
import { useState } from "react";


function Input() {
  const [text, settext] = useState("");
  const [todo, settodo] = useState([]);

  function handleChange(event) {
    settext(event.target.value);
  }

  function handleClick() {
    if (text.trim() !== "") {
      settodo((prevTodo) => {
        return [...prevTodo, { id: prevTodo.length, todo: text }];
      });
      settext('');
    }
  }
  return (
    <>
      <div className="input-container">
        <input
          type="text"
          name=""
          id="input-field"
          value={text}
          placeholder="Enter your task"
          onChange={handleChange}
        />
        <button onClick={handleClick}>Add</button>
      </div>
      {todo.map((todos, index) => {
        return (
          <Todo
            key={todos.id}
            text={todos.todo}
            index={index}
            todo={todo}
            settodo={settodo}
          />
        );
      })}
    </>
  );
}

export default Input;
