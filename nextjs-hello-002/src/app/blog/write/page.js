import styles from "./write.module.css";
import { redirect } from "next/navigation";

const FORM_NAME = {
  CATEGORY: "category",
  SUBJECT: "subject",
  CONTENT: "content",
};

export default () => {
  // form 의 input 에 입력한 값들을 함수에 전달해주는 매개변수가 필요
  // formData 에 input 에 입력한 값들이 담겨서 전달된다
  const actionHandler = async (formData) => {
    "use server"; // 이 함수의 동작은 마치 서버(back-end) 의 요소처럼 동작하라

    const data = {
      category: formData.get(FORM_NAME.CATEGORY),
      subject: formData.get(FORM_NAME.SUBJECT),
      content: formData.get(FORM_NAME.CONTENT),
    };
    console.log("FORM", data);
    redirect("/blog/all");
  };
  console.log("여기는 어디?");
  return (
    <form
      className={styles.form}
      action={actionHandler}
      method="POST"
    >
      <input placeholder="카테고리" name={FORM_NAME.CATEGORY} />
      <input placeholder="제목" name={FORM_NAME.SUBJECT} />
      <textarea
        placeholder="내용"
        rows="20"
        name={FORM_NAME.CONTENT}
      ></textarea>
      <input
        className={styles.submit}
        type="submit"
        value="저장하기"
      />
    </form>
  );
};
