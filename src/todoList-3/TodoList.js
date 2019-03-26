import React from 'react';
import {connect} from 'react-redux';
const TodoList=(props)=>{
    return (
            <div>
                <input value={props.inputValue} onChange={props.handleChange}/>
                <button onClick={props.handleClick}>提交</button>
                <ul>
                    {
                        props.list.map((item,idx)=>{
                            return  <li onClick={()=>props.handleDelete(idx)} key={idx}>{item}</li>
                        })
                    }

                </ul>
            </div>
        )
};
//Store中的State 传到 props上
const mapStateToProps=(state)=>{
    return {
        inputValue:state.inputValue,
        list:state.list
    }
};
const mapDispatchToProps=(dispatch)=>{
    return {
        handleChange(e){
            const action={
                type:'handle_change',
                value:e.target.value
            };
            dispatch(action);
        },
        handleClick(){
            const action={
                type: 'handle_click',
            };
            dispatch(action)
        },
        handleDelete(idx){
            const action={
                type:'handle_delete',
                idx
            }
            dispatch(action);
        }
    }
};
export default connect(mapStateToProps,mapDispatchToProps)(TodoList);
//export default TodoList;