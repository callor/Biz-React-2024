import css from "../css/book.module.css";
import { useBookContext } from "../provider/BookProvider";
const BookMain = () => {
  const { bookList } = useBookContext();
  const viewList = bookList.map((book) => {
    return (
      <tr>
        <td>{book.title}</td>
        <td>{book.publisher}</td>
        <td>{book.author}</td>
        <td>
          <img src={book.image} width="100px" />
        </td>
      </tr>
    );
  });
  return (
    <>
      <h1 className={css.title}>도서정보 검색</h1>
      <table className={css.list}>
        <tr>
          <th>도서명</th>
          <th>출판사</th>
          <th>저자</th>
          <th>이미지</th>
        </tr>
        {viewList}
      </table>
    </>
  );
};
export default BookMain;
