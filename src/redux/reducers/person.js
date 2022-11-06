import {ADD_PERSON} from '../constant'

const initState=[{id:'001',name:'tom',age:18}]
//reducer函数必须是个纯函数
export default function personReudcer(preState=initState,state){
    const {type,data}=state
    switch(type){
        case ADD_PERSON:
            return [data,...preState]
        default:
            return preState
    }
}