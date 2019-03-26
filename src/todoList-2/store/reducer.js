import {update_input_value,submit_item,delete_item,init_list} from './actionTypes';
const defaultState={
    inputValue:'',
    list:[]
};
export default (state=defaultState,action)=>{
    if(action.type===update_input_value){
        const newState=JSON.parse(JSON.stringify(state));
        newState.inputValue=action.value;
        return newState;
    }
    if(action.type===submit_item){
        const newState=JSON.parse(JSON.stringify(state));
        newState.list=[...newState.list,action.value];
        newState.inputValue='';
        return newState;
    }
    if(action.type===delete_item){
        const newState=JSON.parse(JSON.stringify(state));
        newState.list.splice(action.index,1);
        return newState;
    }
    if(action.type===init_list){
        const newState=JSON.parse(JSON.stringify(state));
        newState.list=action.list;
        return newState;
    }
    return state;
}