import TodoInput from "./TodoInput";
import TodoList from "./TodoList";
import "../css/TodoMain.css";
import { useState } from "react";
/*
1. 코드 시나리오 변경
TodoInput 에서 사용하던 todoItem(오늘할일 데이터가 저장된 상태변수)값을
TodoList 가 화면에 표현하는 todoList 상태배열에 추가하고 싶다
TodoInput(컴포넌트) 에서 입력된 값을 TodoList(컴포넌트) 에게 전달하여
배열에 추가를 해야 한다
React 에서는 형제 컴포넌트간에는 상태변수나 변수의 값을 전달할수 없다

그래서 TodoInput 과 TodoList 에서 시작된 상태변수를
부모인 TodoMain 으로 끌어 올리기를 해야 한다
*/
const TodoMain = () => {
  // TodoInput(컴포넌트)와 TodoList(컴포넌트)에서 시작된 상태변수를
  // 끌어올려 다시 시작하기
  const [todoItem, setTodoItem] = useState("");
  const [todoList, setTodoList] = useState([]);
  return (
    <div className="todoMain">
      <header className="todoHeader">
        <h1>지금 할일!!</h1>
      </header>
      <TodoInput todoItem={todoItem} setTodoItem={setTodoItem} />
      <TodoList todoList={todoList} />
    </div>
  );
};
export default TodoMain;
