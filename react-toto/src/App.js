import TodoMain from "./comps/TodoMain";
import "./css/App.css";

function App() {
  return (
    <div className="App">
      <header>
        <h1>오늘 할일</h1>
      </header>
      <TodoMain />
    </div>
  );
}

export default App;
