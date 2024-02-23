const MemoInput = () => {
  return (
    <>
      <input type="text" placeholder="메모제목" />
      <input type="text" placeholder="메모를 입력하세요" />
      <input type="file" />
      <input type="button" value="추가" />
      <input type="hidden" value="삭제" />
    </>
  );
};
export default MemoInput;
