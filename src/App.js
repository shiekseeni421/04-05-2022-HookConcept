import HomePage from "./Component/ContextAPIComponent/HomePage";
import Counter from "./Component/UseReducerComponent/Counter";
import TodoListPage from "./Component/useRefComponent/TodoListPage";
import GetDataAPI from "./Component/UseMemoComponenet/GetDataAPI";

function App() {
  return (
    <div className="App">
      <HomePage />
      <Counter />
      <TodoListPage />
      <GetDataAPI />
    </div>
  );
}

export default App;
