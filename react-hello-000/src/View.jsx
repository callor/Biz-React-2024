/*
부모 컴포넌트로부터 2개의 props 를 전달받기
*/
const View = ({ name, age }) => {
  return (
    <>
      <h2>이름 : {name}</h2>
      <h2>나이 : {age}</h2>
    </>
  );
};

export default View;
