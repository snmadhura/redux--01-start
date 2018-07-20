import * as actionTypes from './actionTypes';

export const increment = () => {
    return{
        type: actionTypes.INCREMENT
    }
}

export const decrement = () =>{
    return{
        type : actionTypes.DECREMENT
    }
}

export const add = (result) =>{
    return{
        type : actionTypes.ADD,
        val : result
    }
}

export const subtract = (result) =>{
    return{
        type : actionTypes.SUBTRACT,
        val : result
    }
}