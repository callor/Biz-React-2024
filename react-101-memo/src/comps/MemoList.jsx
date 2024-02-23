import MemoItem from "./MemoItem";
const MemoList = ({ memoList }) => {
  const viewList = memoList.map((memo) => {
    return <MemoItem memo={memo} />;
  });
  return <ul>{viewList}</ul>;
};
export default MemoList;
