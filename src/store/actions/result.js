import * as actionTypes from './actionTypes';

export const saveResult = (res) =>{
    return{
        type : actionTypes.STORE_RESULT,
        result : res
    }
}

export const storeResult = (res) =>{
    return (dispatch, getState) =>{
        setTimeout(() => {
            // const haleCounter = getState().ctr.counter;
            // console.log(haleCounter);
           dispatch(saveResult(res))
        }
        ,3000)
    }    
}

export const deleteResult = (resElId) =>{
    return{
        type : actionTypes.DELETE_RESULT,
        resultElId : resElId
    }
}