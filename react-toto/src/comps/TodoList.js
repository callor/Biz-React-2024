const TodoList = ({ todoList }) => {
  const todoItemView = todoList.map((item) => {
    return <div>{item}</div>;
  });
  return <div className="list">{todoItemView}</div>;
};
export default TodoList;
