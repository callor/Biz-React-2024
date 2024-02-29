import AsideList from "@/comps/AsideList";
import styles from "./blog.module.css";

// blog/layout.js
export default ({ children }) => {
  return (
    <main className={styles.main}>
      <aside className={styles.aside}>
        <AsideList />
      </aside>
      <section className={styles.section}>{children}</section>
    </main>
  );
};
