import { legacy_createStore as createStore } from "redux";
import countReducer from './count_reducer'

export default createStore(countReducer)