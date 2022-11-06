import './App.css';
import Count from './containers/Count';//引入的是Count容器组件
import Person from './containers/Person';//引入的是Person容器组件
//引入store
// import store from "./redux/store";

function App() {
  return (
    <div>
      {/* 给容器组件传递store */}
      {/* <Count store={store}/> */}
      <Count />
      <Person />
    </div>
  );
}

export default App;
