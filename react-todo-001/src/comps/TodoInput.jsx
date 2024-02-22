import { useState } from "react";
import "../css/TodoInput.css";

/*
현재 button 이 disabled 상태이다
input box 에 문자열이 입력되면
입려된 문자열 개수를 계산하여 3글자 이상이 되면
button 의 disabled 를 해제하여 click 이 가능한 "상태"로 만들고 싶다

표준 JS 와 달리 React 에서는 "상태"를 관리하는 방법이 다르다

*/
const TodoInput = ({ todoItem, setTodoItem, todoInsert }) => {
  // 지금부터 todoItem 이라는 상태변수가 시작된다
  // == 상태변수 선언의 다른 표현
  // 상태변수는 Read Only 이다!!
  // const [todoItem, setTodoItem] = useState("");

  // 시나리오가 변경되어 todoItem 상태를 TodoMain 으로 보내고
  // TodoMain 으로 부터 props 로 전달받아 사용하기

  // 추가 버튼을 클릭했을때 작동하는 event 핸들러
  const onInsertHandler = () => {
    // 추가 버튼이 클릭되면 TodoMain 에서 보내준(전달한)
    // todoInsert() 함수를 호출하라
    todoInsert();
  };

  // input box 에 키보드로 문자열을 입력하면 작동되는 event 핸들러
  const onChangeHander = (e) => {
    // 키보드로 입력한 한개의 문자열 getter
    const text = e.target.value;
    // todoItem 상태변수의 상태를 변경하는 함수 setTodoItem() 을 사용하여
    // 상태변수의 값(상태)를 변경하기
    setTodoItem(text);
  };

  return (
    <div className="todoInput">
      <input
        placeholder="TODO"
        value={todoItem}
        onChange={onChangeHander}
      />
      <button
        disabled={todoItem.length < 3}
        onClick={onInsertHandler}
      >
        추가
      </button>
    </div>
  );
};
export default TodoInput;
