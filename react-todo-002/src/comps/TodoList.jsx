import TodoItem from "./TodoItem";
const TodoList = ({ todoList, todoComplete, todoDelete }) => {
  const viewList = todoList.map((item) => (
    <TodoItem
      item={item}
      key={item.seq}
      todoComplete={todoComplete}
      todoDelete={todoDelete}
    />
  ));
  return <>{viewList}</>;
};

export default TodoList;
