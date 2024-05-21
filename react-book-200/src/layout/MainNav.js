import { NavLink } from "react-router-dom";
import css from "../css/main.module.css";

const MainNav = () => {
  return (
    <nav className={css.main_nav}>
      <NavLink to="/">Home</NavLink>
      <NavLink to="/bbs/notice">공지사항</NavLink>
      <NavLink to="/bbs/free">자유게시판</NavLink>
      <NavLink to="/user/login" className={css.login}>
        로그인
      </NavLink>
      <NavLink to="/user/join">회원가입</NavLink>
    </nav>
  );
};
export default MainNav;
