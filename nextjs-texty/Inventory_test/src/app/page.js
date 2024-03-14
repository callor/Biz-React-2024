import styles from "./styles/Home.module.css";
import Link from "next/link";

export default function Home() {
  return (
    <div className={styles.container}>
      <main className={styles.main}>
        <h1 className={styles.title}>TEXTY</h1>
        <div className={styles.grid}>
          <button className={styles.card}>
            <h2 className="title">
              <Link href="/game">게임시작</Link> &rarr;
            </h2>
          </button>
          <button className={styles.card} name="out">
            <h2>나가기 &rarr;</h2>
          </button>
        </div>
      </main>
    </div>
  );
}
