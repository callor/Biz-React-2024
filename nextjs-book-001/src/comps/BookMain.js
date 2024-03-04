"use client";
import BookSearch from "./BookSearch";
import BookList from "./BookList";
import BookDetail from "./BookDetail";
import "./BookMain.css";
import { useState, useEffect } from "react";
export default () => {
  const [search, setSearch] = useState("");
  const [bookList, setBookList] = useState([]);

  const fetchBooks = async () => {
    try {
      const response = await fetch(`/api/get?search=${search}`);
      const books = await response.json();
      setBookList([...books]);
    } catch (error) {
      console.log(error);
    }
  };

  /**
   * useEffect() 는 CSR(Client Side Rendering) 컴포넌트에서
   * 특정한 state 변수를 감시하고 있다가
   * state 변수의 변화가 생기면 event 를 일으키고 내부의 코드를 실행한다
   *
   * useEffect() 에 state([]) 를 공백으로 두면
   * 현재 component 가 화면에 mount 되었을때 한번 event 를 발생하고
   * 내부의 코드를 실행한다
   */
  useEffect(() => {
    fetchBooks();
  }, [search]);

  return (
    <section>
      <BookSearch search={search} setSearch={setSearch} />
      <article className="body">
        <BookList bookList={bookList} />
        <BookDetail />
      </article>
    </section>
  );
};
