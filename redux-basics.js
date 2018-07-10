const redux = require('redux');

const createStore = redux.createStore;
//reducer
const initialState = {
    counter : 0
}

const rootReducer = (state = initialState, action) =>{
    if(action.type === 'INCCOUNTER'){
        return{
        ...state,
        counter : state.counter + 1
        }
    
    }

    if(action.type === 'ADDCOUNTER'){
        return{
            ...state,
            counter : state.counter + action.value
        }
    }
 return state;
}
//store
const store = createStore(rootReducer);
console.log(store.getState());
//dispatching actions

store.subscribe(() => {
    console.log('[subscription]', store.getState());
});

store.dispatch({type: 'INCCOUNTER'});
store.dispatch({type: 'ADDCOUNTER', value : 10});
console.log(store.getState());

