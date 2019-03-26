import React,{Component,Fragment} from 'react';
import store from './store/index';
import {getTodoList,getInputChangeAction,submitItem,deleteItem,initList} from './store/actionCreators';
import TodoListUI from "./TodoListUI";

class TodoList extends Component{
    constructor(props){
        super(props);
        this.state=store.getState();// 获取状态
        store.subscribe(this.handleStoreChange);//追踪store
    }

    componentDidMount(){
        //react-saga 把异步操作放在saga.js中.
      const action=getTodoList();
      store.dispatch(action);
        //  const action=getTodoList();
      //  store.dispatch(action);//有中间件redux-thunk时,action为函数 则自动执行该函数

    }


    render(){
       return (
          <Fragment>
            <TodoListUI
                list={this.state.list}
                inputValue={this.state.inputValue}
                handleChange={this.handleChange}
                handleClick={this.handleClick}
                handleDelete={this.handleDelete}
            />
          </Fragment>
       ) ;
    }
    handleChange=(e)=>{
        const action=getInputChangeAction(e.target.value);
        store.dispatch(action);//传递action
    };
    handleStoreChange=()=>{
        this.setState(store.getState());
    };
    handleClick=()=>{
      const action=submitItem(this.state.inputValue);
      store.dispatch(action);
    };
    handleDelete=(index)=>{
      const action=deleteItem(index);
      store.dispatch(action);
    }
}
export default TodoList;
/*
todoList Redux写法
createStore初始化后,在Reducer中创建初始数据.
要更新时用action描述更新的事件并传递要更新的数据.
通过store.dispatch发送action,然后在reducer中进行对应的处理后,返回新的数据(状态)即可.
 */