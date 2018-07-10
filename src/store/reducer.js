import * as actionTypes from './actions';

const initialState = {
    counter : 0,
    results : []
}

const reducer = (state = initialState, action) =>{
    switch(action.type){
        case actionTypes.INCREMENT : 
        const newState = Object.assign({}, state);
        newState.counter = state.counter + 1;
        return newState;
        case actionTypes.DECREMENT :
        return{
            ...state,
            counter : state.counter - 1
        }
        case actionTypes.INCREMENTBY5 :
        return{
            ...state,
            counter : state.counter + action.value
        }
        case actionTypes.DECREMENTBY5 :
        return{
            ...state,
            counter : state.counter - action.value
        }      
        case actionTypes.STORE_RESULT :
        return{
            ...state,
        results : state.results.concat({id : new Date(), value : state.counter})
        }
        case actionTypes.DELETE_RESULT : 
        const newArray = state.results.filter(result => result.id !== action.resultELeId)
        return{
            ...state,
            results : newArray
        }
    }    
      return state;
}

export default reducer;