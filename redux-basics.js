const redux = require('redux');

const createStore = redux.createStore;
//reducer
const initialState = {
    counter : 0
}

const rootReducer = (state = initialState, action) =>{
return state;
}
//store
const store = createStore(rootReducer);
console.log(store.getState());
//dispatching actions

store.dispatch({type: 'INCCOUNTER'});
store.dispatch({type: 'ADDCOUNTER', value : 10});
console.log(store.getState());