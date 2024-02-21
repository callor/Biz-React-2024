/**
 * <Comps>값</Comps> 처럼 전달한 값은
 * 자식 컴포넌트에서 {children} 매개변수를 통해서 받는다
 *
 * 일반적인 함수에서는 호출한 곳에서 보내는 데이터를 받은 창구를
 * 매개변수, argument 라고 한다.
 *
 * const f = ( a, b) =>{
 *   console.log(a + b)
 *   a = 100;
 *   b = 200;
 *   console.log(a + b)
 * }
 * f(3,4)
 *
 * React(JSX) 컴포넌트에서는 이 친구를 props(Properties) 라고 한다
 * const Comps = ({a, b}) =>{
 *    console.log(a + b)
 *    a = 100 // 오류발생
 *    b = 200 // 오류발생
 * }
 * 호출할 때는 이름=값 형식으로 전달해야 한다
 * Comps( a=3, b=4 )
 *
 *
 * React(JSX) 에서는 부모 컴포넌트로 부터 전달받는 변수를 props 라고한다
 * 부모 컴포넌트로 부터 전달받은 props 는 절대 변경 불가, Read Only
 *
 *
 */
const Box = ({ children }) => {
  return (
    <div>
      <h3>Hello {children}</h3>
      <h3>{`Hello ${children}`}</h3>
    </div>
  );
};
export default Box;

/**
 * const res = await fetch("/book/1/get")
 * const res = await res.json()
 *
 * fetch('/book/1/get)
 * .then(res=>res.json())
 * .then(result=>console.log(result))
 *
 * fetch('/book/1/get)
 * .then( (res)=>{ return res.json() })
 * .then(  (result)=>{ return console.log(result)  })
 *
 *
 *
 */
