import {
  createContext,
  useContext,
  useEffect,
  useState,
} from "react";

const BookContext = createContext();

const useBookContext = () => {
  return useContext(BookContext);
};

const BookContextProvider = ({ children }) => {
  const [bookList, setBookList] = useState([]);

  useEffect(() => {
    const bookFech = async () => {
      const res = await fetch("/naver/books/java");
      const json = await res.json();
      setBookList([...json]);
    };
    bookFech();
  }, []);

  return (
    <BookContext.Provider value={{ bookList }}>
      {children}
    </BookContext.Provider>
  );
};

export { BookContextProvider, useBookContext };
