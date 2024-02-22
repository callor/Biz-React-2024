import TodoItem from "./TodoItem";
const TodoList = ({ todoList }) => {
  const viewList = todoList.map((item) => (
    <TodoItem item={item} key={item.seq} />
  ));
  return <>{viewList}</>;
};

export default TodoList;
