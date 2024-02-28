import Link from "next/link";

// notice/page.js
export default () => {
  return (
    <div>
      <h1>공지사항 리스트</h1>
      <Link href="/notice/input">공지사항 작성</Link>
    </div>
  );
};
