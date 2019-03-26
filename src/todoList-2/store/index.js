import {createStore,applyMiddleware,compose} from 'redux';
import thunk from 'redux-thunk';
import createSageMiddleware from 'redux-saga';
import mySaga from './saga';
import reducer from './reducer';


//const store=createStore(reducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());//创建store时,将reducer作为参数

/* redux-thunk
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({}) : compose;
const enhancer = composeEnhancers(
    applyMiddleware(thunk),
    // other store enhancers if any
);
const store=createStore(
    reducer,
    enhancer
    );
*/
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({}) : compose;
const sagaMiddleware=createSageMiddleware();
const enhancer = composeEnhancers(
    applyMiddleware(sagaMiddleware),
    // other store enhancers if any
);
const store=createStore(
    reducer,
    enhancer
);
sagaMiddleware.run(mySaga)



export default store;