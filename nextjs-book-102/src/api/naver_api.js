"use server";
// const NAVER_CLIENT_ID = process.env.NAVER_CLIENT_ID;
// const NAVER_CLIENT_SECRET = process.env.NAVER_CLIENT_SECRET;

// process.env 환경변수를 구조분해하여 개별 변수에 할당하기
const { NAVER_CLIENT_ID, NAVER_CLIENT_SECRET } = process.env;
const NAVER_BOOK_URL =
  "https://openapi.naver.com/v1/search/book.json";

// 만약 client mode 로 사용하는 컴포넌트, 함수모듈등에는
// 함수의 시작부분에 async 를 절대 사용하면 안된다
export const getNaverBooks = async (search) => {
  if (!search) return [];
  const fetchOption = {
    method: "GET",
    headers: {
      "X-Naver-Client-Id": NAVER_CLIENT_ID,
      "X-Naver-Client-Secret": NAVER_CLIENT_SECRET,
    },
  };
  const respose = await fetch(
    `${NAVER_BOOK_URL}?query=${search || "java"}`,
    fetchOption
  );
  const books = await respose.json();
  // naver_api.js 는 server 모듈이다
  // 이 모듈에서 console.log() 를 사용하면 서버 console 에 출력된다
  // console.log("BOOKS", books);
  return books.items;
};
