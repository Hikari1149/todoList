import {update_input_value,submit_item,delete_item,init_list,get_todo_list} from './actionTypes';
import axios from 'axios';
export const getInputChangeAction=(value)=>({
    type:update_input_value,
    value
});
export const submitItem=(value)=>({
    type:submit_item,
    value
});
export const deleteItem=(index)=>({
    type:delete_item,
    index
});
export const initList=(list)=>({
   type:init_list,
    list
});

export const getTodoList=()=>({
    type:get_todo_list
})

/*   redux - thunk
export const getTodoList=()=>{
  return (dispatch)=>{
          axios.get('/api/todoList').then((res)=> {
            const data = res.data;//"["123","234","345"]"
            const newData = data.slice(1, data.length - 1).split(',');
            const action = initList(newData);
            dispatch(action);
      })
  }
};
*/

