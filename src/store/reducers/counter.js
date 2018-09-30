import * as actionsTypes from '../actions/actionTypes';
import {updateObject} from '../utility';

const initialState = {
    counter: 0
}

const reducer = (state = initialState, action)=>{
    switch(action.type){
        case actionsTypes.INCREMENT:
            return updateObject(state, { counter:  state.counter + 1});
        case actionsTypes.DECREMENT:
            return updateObject(state, { counter:  state.counter - 1});
        case actionsTypes.ADD:
            return updateObject(state, { counter: state.counter + action.val});
        case actionsTypes.SUB:
            return updateObject(state, { counter: state.counter - action.val});
    }
    return state
}

export default reducer;