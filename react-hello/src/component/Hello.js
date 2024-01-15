import { useState } from "react";

const Hello = () => {
  /**
   * react state(상태) 변수
   * react 에서는 일반 변수와 달리 state 라는 변수가 있다
   * 이 변수는 read only type 의 변수이고
   * 변수를 만들때 useState() 함수를 사용하여 만든다
   * useState() 함수는 state 변수와 setState() 함수를 생성한다
   * state 변수를 화면에 표현하고자 하는 곳에 위치시켜두면
   * react 가 state 변수의 상태를 항상 감시한다
   * 여딘가에서 setState() 함수를 통하여 state 변수값이 변화되면
   * 화면에 표시된 모든 state 변수를 다시 그린다
   *
   * react 에서는 디자인 단계에서 변수가 표시될 위치를 지정하면
   * 그 이후에 변화된 값을 다시 지정하여 그려라 라는
   * 코드를 사용하지 않는다
   *
   *
   */
  const [counter, setCounter] = useState(0);
  const [stName, setStName] = useState("홍길동");

  const increment = () => {
    setCounter(counter + 1);
  };
  const decrement = () => {
    setCounter(counter - 1);
  };

  const onChangeHandler = (event) => {
    // target == input tag
    const target = event.target;

    // input box 에 입력된 문자열을
    // setStName() 함수를 사용하여 stName 변수에 할당하기
    setStName(target.value);
  };
  return (
    <>
      <h1>안녕하세요</h1>
      <p>
        반갑습니다<span>{counter}</span>
      </p>
      <p>
        <input value={stName} onChange={onChangeHandler}></input>
      </p>
      <p>입력한 값 : {stName}</p>
      <p>{counter}</p>
      <p>{counter}</p>

      <button onClick={increment}>증가</button>
      <button onClick={decrement}>감소</button>
    </>
  );
};

export default Hello;
