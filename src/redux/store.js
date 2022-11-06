import { legacy_createStore as createStore,applyMiddleware } from "redux";
import addReducer from './reducers'
//引入redux-thunk，用于支持异步action
import thunk from "redux-thunk";



export default createStore(addReducer,applyMiddleware(thunk))