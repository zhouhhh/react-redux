import './App.css';
import Count from './containers/Count';
//引入store
import store from "./redux/store";

function App() {
  return (
    <div>
      {/* 给容器组件传递store */}
      <Count store={store}/>
    </div>
  );
}

export default App;
