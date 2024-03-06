"use client";
import { getNaverBooks } from "@/api/naver_api";
import { useEffect, useState } from "react";
const BookDetail = ({ isbn }) => {
  const [book, setBook] = useState("");
  useEffect(() => {
    const fetchBook = async () => {
      const result = await getNaverBooks(isbn);
      const book = result[0];
      setBook(book);
    };
    fetchBook();
  }, [isbn]);

  return (
    <>
      <h1>BookDetail</h1>
      <p>ISBN: {book.isbn}</p>
      <p>도서명: {book.title}</p>
      <p>저자: {book.author}</p>
      <p>출판사: {book.publisher}</p>
    </>
  );
};
export default BookDetail;
