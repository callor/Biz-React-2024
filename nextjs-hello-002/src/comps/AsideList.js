"use client";
import Link from "next/link";
import { useRouter } from "next/router";
import styles from "./asideList.module.css";
export default () => {
  const router = useRouter();
  return (
    <ul className={styles.ul}>
      <li>
        <Link
          href="/blog/write"
          className={
            router.pathname === "/blog/write" ? styles.active : ""
          }
        >
          글쓰기({router})
        </Link>
      </li>
      <li>
        <Link href="/blog/all">전체글 보기</Link>
      </li>
      <li>
        <Link href="/blog/like">인기글 보기</Link>
      </li>
      <li>
        <Link href="/blog/new">최신글 보기</Link>
      </li>
    </ul>
  );
};
