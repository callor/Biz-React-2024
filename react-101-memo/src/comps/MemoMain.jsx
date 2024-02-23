import styles from "../css/MemoMain.module.css";
import "../css/Memo.css";
import MemoMainLeft from "./MemoMainLeft";
import MemoMainRight from "./MemoMainRight";

// MemoLeft, MemoRight 에서 import 할 컴포넌트를 Main 에서 import 하고
// MemoLeft, MemoRight 의 children 으로 보내서 컴포넌트를 합성하기
import MemoDate from "./MemoDate";
import MemoList from "./MemoList";
import MemoInput from "./MemoInput";

const MemoMain = () => {
  return (
    <div className={styles.main}>
      <div className={styles.aside}>
        <MemoMainLeft>
          <MemoDate />
          <MemoList />
        </MemoMainLeft>
      </div>
      <div className={styles.aside}>
        <MemoMainRight>
          <MemoInput />
        </MemoMainRight>
      </div>
    </div>
  );
};

export default MemoMain;
