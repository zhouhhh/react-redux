import {DECREMENT,INCREMENT} from './constant'
// import store from './store'

//同步action，就是指action的值为Object类型的一般对象
export const createIncrementAction=data=>({type:INCREMENT,data})
export const createDecrementAction=data=>({type:DECREMENT,data})
//异步action，就是指action的值为函数，异步action中一般会调用同步action，异步action不是必须要用的
export const createIncrementAsyncAction=(data,time)=>{
    //如果action是一个函数，那store就会调用这个函数，并传过来一个参数dispatch，因此不用引入store
    return (dispatch)=>{
        setTimeout(()=>{
            // store.dispatch(createIncrementAction(data))
            dispatch(createIncrementAction(data))
        },time)
    }
}