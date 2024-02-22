import TodoInput from "./TodoInput";
import TodoList from "./TodoList";
import "../css/TodoMain.css";
import { useState } from "react";
import uuid from "react-uuid";

const TodoMain = () => {
  const [todoItem, setTodoItem] = useState("");
  const [todoList, setTodoList] = useState([]);

  const todoInsert = () => {
    const newTodoList = [
      ...todoList,
      { seq: uuid(), todo: todoItem, complete: false },
    ];
    setTodoList(newTodoList);
  };

  return (
    <div className="todoMain">
      <header className="todoHeader">
        <h1>지금 할일!!</h1>
      </header>
      <TodoInput
        todoItem={todoItem}
        setTodoItem={setTodoItem}
        todoInsert={todoInsert}
      />
      <TodoList todoList={todoList} />
    </div>
  );
};
export default TodoMain;
