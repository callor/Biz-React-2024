import mainCss from "@/css/page.module.css";
export default ({ children }) => {
  return <main className={mainCss.main}>{children}</main>;
};
