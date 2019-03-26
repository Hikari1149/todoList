import {  takeEvery,put } from 'redux-saga/effects';
import {get_todo_list} from './actionTypes';
import axios from 'axios';
import {initList} from './actionCreators';
function* getTodoList(){
    try
    {
        const res = yield axios.get('/api/todoList');
        console.log(res.data);
        const action = initList(res.data);
        yield put(action);
    }
    catch(e){
        console.log(e);
    }
}
function* mySaga() {
    yield takeEvery(get_todo_list,getTodoList);//当action='get_todo_list时,执行getTodoList
}
export default mySaga;