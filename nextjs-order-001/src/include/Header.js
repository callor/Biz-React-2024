import Link from "next/link";
import css from "@/css/header.module.css";

export default () => {
  return (
    <>
      <header className={css.header}>
        <h1>나라 ERP 2024</h1>
      </header>
      <nav className={css.nav}>
        <ul>
          <li>
            <Link href="/">Home</Link>
          </li>
          <li>
            <Link href="/">상품원장</Link>
          </li>
          <li>
            <Link href="/">고객관리</Link>
          </li>
          <li className={css.order}>
            <Link href="/order">주문서</Link>
          </li>
          <li className={css.user}>
            <Link href="/">로그인</Link>
          </li>
        </ul>
      </nav>
    </>
  );
};
