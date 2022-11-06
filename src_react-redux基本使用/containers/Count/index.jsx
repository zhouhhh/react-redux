//引入Count的ui组件
import CountUi from "../../components/Count";
import {createIncrementAction,createDecrementAction,createIncrementAsyncAction} from '../../redux/count_action'
// //引入store
// import store from "../../redux/store";
//引入connect用于连接UI组件和redux
import {connect} from 'react-redux'

//映射状态
//mapStateToProps函数的返回的对象中的key作为传递给UI组件props的key,
//value作为传递给UI组件props的value ————状态
//并且接收state参数
const mapStateToProps= state => ({count:state})

//映射操作状态的方法
//mapDispatchToProps函数的返回的对象中的key作为传递给UI组件props的key,
//value作为传递给UI组件props的value ————操作状态的方法
//并且接收dispatch参数
const mapDispatchToProps= dispatch => (
    {
        jia:data=>dispatch(createIncrementAction(data)),//通知redux执行
        jian:data=>dispatch(createDecrementAction(data)),
        jiaAsync:(data,time)=>dispatch(createIncrementAsyncAction(data,time))
    }
)
// 创建并暴露一个容器组件
export default connect(mapStateToProps,mapDispatchToProps)(CountUi)
