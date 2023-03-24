// 子组件
import React from "react";

export default function TodoItem(props) {
    const {name, id} = props.todo;
    
  return (
    <li key={id}>
      {name} {/* delete button 删除当前的 item */}
      <button
        onClick={() => {props.handleDelete(id)}}
      >
        Delete
      </button>
    </li>
  );
}