"use client";
import { useEffect, useState } from "react";
import { getNaverBooks } from "@/api/naver_api";

/**
 * BookSearch 에서 검색어를 입력하면
 * search state 에 변화가 발생하고, BookList 에서는
 * 변화된 search state 의 값을 사용하여
 * 도서정보를 Naver 로 부터 fetch 한후 도서 리스트 state인
 * books 에 반영하는 일을 수행해야 한다
 *
 * client 컴포넌트인 BookList 에서 naver_api 모둘의
 * getNaverBooks() 모듈의 함수를 호출하여 naver 로 부터 데이터를
 * 가져와야 한다.
 * 문제는 naver_api 가 server(use server) 모듈이다
 *
 * client 컴포넌트에서 server 모듈(또는 컴포넌트)의 함수를 호출하여
 * 뭔가 일을 수행하려면
 * 반드시 useEffect() 로 wrapping 해야 한다
 *
 */
const BookList = ({ search, setIsbn }) => {
  const [books, setBooks] = useState([]);

  /**
   * useEffect() 함수에서 익명의 함수를 생성하고
   * useEffect(()=>{},[]) : useEffect의 기본 몸체
   * 몸체( {} )에서 async 로 사용할 함수를 선언한다
   *    여기에서는 const fetchData = async () =>{}
   * useEffect(()=>{ const fetchData = async =()=>{} },[] )
   * 이 함수를 다시 호출하여 실행한다
   *
   * useEffect(()=>{
   *    const fetchData =  async () =>{} // 선언
   *    fetchData()   // 선언한 함수 호출
   * },[])
   *
   */
  useEffect(() => {
    const fetchData = async () => {
      const result = await getNaverBooks(search);
      // client 컴포넌트인 BookList 에서 console.log()를 사용하면
      // 브라우져의 개발자도구 console 에 내용이 출력된다
      console.log(result);
      setBooks([...result]);
    };
    fetchData();
  }, [search]);

  const viewList = books.map((book) => {
    return (
      <li key={book.isbn} onClick={() => setIsbn(book.isbn)}>
        {book.title}
      </li>
    );
  });

  return <ul>{viewList}</ul>;
};

export default BookList;
