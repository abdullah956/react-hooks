import './App.css';
import UseFetchHookTest from "./components/use-fetch/test";
import UseOnclickOutsideTest from "./components/use-outside-click/test";
import UseWindowResizeTest from "./components/use-window-resize/test";
function App() {
  return (
    <div className="App">
      <UseFetchHookTest />
      <UseOnclickOutsideTest />
      <UseWindowResizeTest />
    </div>
  );
}

export default App;
