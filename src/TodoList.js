// 父组件
import React, { useState } from "react";
import TodoItem from "./TodoItem";

// id for each todo item
let nextId = 0;

export default function TodoList() {
  const [inputValue, setInputValue] = useState("");  // todo item
  const [todoList, setTodoList] = useState([]);  // todo list

  function handleDelete(id){
    setTodoList(todoList.filter((a) => a.id !== id));
  }

  return (
    <div>
      <div>
        <input
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
        />
        <button onClick={() => {
            setInputValue(""); //set input empty
            todoList.push({ id: nextId++, name: inputValue }); //将值放入 todo list列表中
          }}>
          Add
        </button>
      </div>
      <ul>
        
        {todoList.map((todo) => {
          return (
            <TodoItem key={todo.id} todo={todo} handleDelete={handleDelete} />
          );
        })}
      </ul>
    </div>
  );
}