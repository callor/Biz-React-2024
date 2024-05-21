import { NavLink, Outlet, useLocation } from "react-router-dom";
import css from "../css/bbs.module.css";
const BBsMainPage = () => {
  // http://localhost:3000/bbs/free 라고 요청이 오면
  // /bbs/free 라는 path 를 추출하는 함수
  const { pathname } = useLocation();

  return (
    <div className={css.main}>
      <aside className={css.left_side}>
        <NavLink to={`${pathname}/write`}>글쓰기</NavLink>
      </aside>
      <aside className={css.right_side}>
        <Outlet />
      </aside>
    </div>
  );
};
export default BBsMainPage;
