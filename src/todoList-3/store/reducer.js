const defaultState={
    inputValue:'',
    list:[]
};
export default (state=defaultState,action)=>{
    if(action.type==='handle_change'){
        const newState=JSON.parse(JSON.stringify(state))
        newState.inputValue=action.value;
        return newState;
    }
    if(action.type==='handle_click'){
        const newState=JSON.parse(JSON.stringify(state));
        newState.list.push(newState.inputValue);
        newState.inputValue='';
        return newState;
    }
    if(action.type==='handle_delete'){
        const newState=JSON.parse(JSON.stringify(state));
        newState.list.splice(action.idx,1);
        return newState;
    }
    return state;
};