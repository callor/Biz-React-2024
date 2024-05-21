import {
  NavLink,
  Outlet,
  useLocation,
  useNavigate,
} from "react-router-dom";
import css from "../css/bbs.module.css";
import { useState } from "react";
const BBsMainPage = () => {
  // http://localhost:3000/bbs/free 라고 요청이 오면
  // /bbs/free 라는 path 를 추출하는 함수
  const { pathname } = useLocation();
  const navigate = useNavigate();
  const [user, setUser] = useState({ name: "이몽룡" });

  if (!user || user.name !== "이몽룡") {
    navigate("/user/login");
  }

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
