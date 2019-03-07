import React from 'react';
class TodoItem extends React.Component{
    constructor(props){
        super(props);
        this.handlerClick=this.handlerClick.bind(this);
    }
    handlerClick=()=>{
        const {index}=this.props;
      this.props.delete(index);//向父组件通信.
    };
    render(){
        return (
            <li onClick={this.handlerClick}>
                {this.props.content}
                </li>
        )
    }
}
export default TodoItem;