import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import store from './redux/store';
import { Provider } from 'react-redux';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {/* 用Provider包裹App组件，让App所有的后代容器组件都能接收到store */}
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);
// 监测redux中状态的改变，如果redux的状态发生了改变，那么重新渲染app组件
//使用了react-redux后就不需要调用store.subscribe的方法了，因为都在容器组件的connect方法里实现了更新

// store.subscribe(()=>{
//   root.render(
//     <React.StrictMode>
//       <App />
//     </React.StrictMode>
//   );
  
// })

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
