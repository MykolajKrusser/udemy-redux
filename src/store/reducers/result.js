import * as actionsTypes from '../actions/actionTypes';
import {updateObject} from '../utility';

const initialState = {
    results: []
}

const reducer = (state = initialState, action)=>{
    switch(action.type){
        case actionsTypes.STORE_RESULT:
            return updateObject(state, {results: state.results.concat({id: new Date(), value: action.result})})
        case actionsTypes.DELETE_RESULT:
            // const id = 2; from dispatch
            // const newArray = [...state.results];
            // newArray.splice(id, 1)
            const updatedArray = state.results.filter(result => result.id !== action.resulElementId)
            return updateObject(state, {results:updatedArray});
    }
    return state
}

export default reducer;