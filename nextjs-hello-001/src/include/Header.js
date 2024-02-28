import styles from "../css/Header.module.css";
// Link 를 자동 import 할때 {Link} 처럼 import 되지 않도록 주의!!!
import Link from "next/link";
const Header = () => {
  return (
    <>
      <header className={styles.header}>
        <h1>나의 홈페이지</h1>
        <input />
      </header>
      <nav className={styles.nav}>
        <ul>
          <li>
            <Link href="/">Home</Link>
          </li>
          <li>
            <Link href="/notice">공지사항</Link>
          </li>
          <li>
            <Link href="/bbs">자유게시판</Link>
          </li>
        </ul>
      </nav>
    </>
  );
};
export default Header;
