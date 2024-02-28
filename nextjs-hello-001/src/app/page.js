import styles from "./page.module.css";

// 익명(무명) 컴포넌트 export
// JS 에서 함수, 컴포넌트를 export default 할수 있는 대상
// 파일 1개당 1개만 가능하다.
// export default 는 export 하는 이름이 의미가 없다
// 익명으로 export 하여도 문제가 없다
export default () => {
  return (
    <main className={styles.main}>
      <h1>나의 NextJS 첫 프로젝트</h1>
    </main>
  );
};
