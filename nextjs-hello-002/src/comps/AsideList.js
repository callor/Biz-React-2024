"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import styles from "./asideList.module.css";
export default () => {
  // Link, router 를 통해서 열렸을때 사용한 URL 을 알려주는 함수
  const pathname = usePathname();

  const routes = [
    { path: "/blog/write", title: "글쓰기" },
    { path: "/blog/all", title: "전체글 보기" },
    { path: "/blog/new", title: "새글 보기" },
    { path: "/blog/like", title: "인기글 보기" },
  ];

  const viewRoutes = routes.map((route) => {
    return (
      <li>
        <Link
          href={route.path}
          className={pathname === route.path ? styles.active : ""}
        >
          {route.title}
        </Link>
      </li>
    );
  });

  return <ul className={styles.ul}>{viewRoutes}</ul>;
};
