import styles from "../css/MemoItem.module.css";
const MemoItem = ({ memo }) => {
  return (
    <div className={styles.item}>
      <div className={styles.image}></div>
      <div className={styles.date_box}>
        <div>{memo.m_date}</div>
        <div>{memo.m_time}</div>
      </div>
      <div className={styles.memo}>{memo.m_subject}</div>
    </div>
  );
};
export default MemoItem;
