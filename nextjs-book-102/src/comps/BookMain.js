"use client";
import { useState } from "react";
import BookSearch from "./BookSearch";
import BookList from "./BookList";
import BookDetail from "./BookDetail";
import "./BookMain.css";
const BookMain = () => {
  const [search, setSearch] = useState("");
  return (
    <section className="book main">
      <BookSearch search={search} setSearch={setSearch} />
      <article className="book body">
        <aside className="book list">
          <BookList search={search} />
        </aside>
        <aside className="book detail">
          <BookDetail />
        </aside>
      </article>
    </section>
  );
};
export default BookMain;
