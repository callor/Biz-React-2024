const BookSearch = ({ search, setSearch }) => {
  const onChangeHandler = (e) => {
    setSearch(e.target.value);
  };
  return (
    <div className="book search">
      <input
        placeholder="검색어"
        value={search}
        onChange={onChangeHandler}
      />
    </div>
  );
};
export default BookSearch;
