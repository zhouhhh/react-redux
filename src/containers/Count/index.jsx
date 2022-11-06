import React, { Component } from 'react'
//引入action
import {
    increment,
    decrement,
    incrementAsync
} from '../../redux/actions/count'
//引入connect用于连接UI组件和redux
import {connect} from 'react-redux'
//定义UI组件
class Count extends Component {
    state={carName:'奔驰'}

    increment=()=>{
        const {value}=this.selectNumber
        this.props.increment(value*1)        
    }
    decrement=()=>{
        const {value}=this.selectNumber
        this.props.decrement(value*1)        
    }
    incrementIfOdd=()=>{
        const {value}=this.selectNumber
        if(this.props.count%2!==0){
          this.props.increment(value*1)
        }
    }
    incrementAsync=()=>{
        const {value}=this.selectNumber
        this.props.incrementAsync(value*1,500)
    }
  render() {
    // console.log('ui组件穿传过来的props',this.props);
    return (
      <div>
         <h2>我是Count组件,下方组件总人数为{this.props.persons.length}</h2>
        <h3>当前求和为：{this.props.count}</h3>
        <select ref={c=>this.selectNumber=c}>
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
        </select>&nbsp;
        <button onClick={this.increment}>+</button>&nbsp;
        <button onClick={this.decrement}>-</button>&nbsp;
        <button onClick={this.incrementIfOdd}>当前求和为基数加</button>&nbsp;
        <button onClick={this.incrementAsync}>异步加</button>
      </div>
    )
  }
}

//映射状态
//mapStateToProps函数的返回的对象中的key作为传递给UI组件props的key,
//value作为传递给UI组件props的value ————状态
//并且接收state参数
// const mapStateToProps= state => ({count:state})

//映射操作状态的方法
//mapDispatchToProps函数的返回的对象中的key作为传递给UI组件props的key,
//value作为传递给UI组件props的value ————操作状态的方法
//并且接收dispatch参数
// mapDispatchToProps可以传函数或者对象（如下两种传递方式）
// const mapDispatchToProps= dispatch => (
//     {
//         increment:data=>dispatch(increment(data)),//通知redux执行
//         decrement:data=>dispatch(decrement(data)),
//         incrementAsync:(data,time)=>dispatch(incrementAsync(data,time))
//     }
// )
// 创建并暴露一个容器组件
// export default connect(mapStateToProps,mapDispatchToProps)(CountUi)
export default connect(
    state => ({
      persons:state.persons,
      count:state.count
    }),

    //mapDispatchToProps的一般写法
    // dispatch => (
    //     {
    //         increment:data=>dispatch(increment(data)),
    //         decrement:data=>dispatch(decrement(data)),
    //         incrementAsync:(data,time)=>dispatch(incrementAsync(data,time))
    //     }
    // )

    //mapDispatchToProps的简写
    //这种写法没有手动dispatch触发，只是准备了action，但是react-redux会自动dispatch
    {
        increment,
        decrement,
        incrementAsync
    }
)(Count)
