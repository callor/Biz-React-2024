import Box from "./Box";
import "./App.css";
import View from "./View";
import Item from "./Item";

// 함수방식으로 App 이라는 컴포넌트 시작(생성)
const App = () => {
  // React(JSX)에서는 tag(컴포넌트)에 클래스를 지정할때
  // className 키워드를 사용한다
  return (
    <div className="AppMain">
      <h1>반갑습니다.</h1>
      <h1>우리나라만세</h1>
      <Box>대한민국</Box>
      <Box>우리나라</Box>
      <Box>
        <h1>광주광역시</h1>
      </Box>
      <View name="홍길동" age="33" />
      <View name="이몽룡" age="20" />
      <Item name="성춘향" age="16" />
    </div>
  );
};
export default App;
