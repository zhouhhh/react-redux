import {DECREMENT,INCREMENT} from './constant'

export const createIncrementAction=data=>({type:INCREMENT,data})
export const createDecrementAction=data=>({type:DECREMENT,data})