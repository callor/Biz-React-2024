// BookList
const BookList = ({ bookList }) => {
  // const bookList = [
  //   "자바완전정복",
  //   "자바입문",
  //   "MySQL",
  //   "데이터베이스",
  //   "NodeJS",
  // ];
  const viewList = bookList.map((book) => {
    return <li>{book.title}</li>;
  });

  return <aside>{viewList}</aside>;
};
export default BookList;
