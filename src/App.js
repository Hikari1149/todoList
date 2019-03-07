import React, { Component } from 'react';
import TodoItem from './TodoItem.js';
class App extends Component {
    constructor(props){
        super(props);
        this.state={
            list:[],
            inputVal:''
        }
        this.handlerChange=this.handlerChange.bind(this);
        this.handlerClick=this.handlerClick.bind(this);
        this.handlerDelete=this.handlerDelete.bind(this);
    }
    handlerClick=()=>{
      this.setState({
            list:[...this.state.list,this.state.inputVal],
            inputVal:''
      })
    };
    handlerChange=(e)=>{
      this.setState({
          inputVal:e.target.value
      })
    };
    handlerDelete=(idx)=>{
        const list=this.state.list;
        list.splice(idx,1);//不修改list指向.
        this.setState(list);
    };
    getTodoList (){
        return (
            this.state.list.map((item,index)=>{
                return <TodoItem key={index}
                                 delete={this.handlerDelete}
                                 content={item}
                                 index={index}/>
                //   return <li key={index} onClick={this.handlerDelete.bind(this,index)}>{item}</li>
            })
        )
    }
  render() {


      return (
      <React.Fragment>
          <input value={this.state.inputVal} onChange={this.handlerChange}/>
          <button className="red-btn" onClick={this.handlerClick}>click</button>
          <ul>
              {
                  this.getTodoList()
              }
          </ul>
      </React.Fragment>
    );
  }
}
export default App;
