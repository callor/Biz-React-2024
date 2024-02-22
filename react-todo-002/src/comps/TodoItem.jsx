import "../css/TodoItem.css";
const TodoItem = ({ item }) => {
  const onCompleteClick = (seq) => {
    alert(seq);
  };

  return (
    <div className={item.complete ? "todoItem complete" : "todoItem"}>
      <div className="delete">&times;</div>
      <div className="content">{item.todo}</div>
      <div
        className="complete"
        onClick={() => onCompleteClick(item.seq)}
      >
        &#x2713;
      </div>
    </div>
  );
};
export default TodoItem;
