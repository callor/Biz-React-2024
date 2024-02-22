import "../css/TodoInput.css";
const TodoInput = ({ todoItem, setTodoItem, todoInsert }) => {
  const onInsertHandler = () => {
    todoInsert();
    setTodoItem("");
  };

  const onChangeHander = (e) => {
    const text = e.target.value;
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
        disabled={todoItem.length < 2}
        onClick={onInsertHandler}
      >
        추가
      </button>
    </div>
  );
};
export default TodoInput;
