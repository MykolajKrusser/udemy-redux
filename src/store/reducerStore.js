import * as actionsTypes from './actions';

const initialState = {
    counter: 0,
    results: []
}

const reducer = (state = initialState, action)=>{
    switch(action.type){
        case actionsTypes.INCREMENT:
            const newState = Object.assign({}, state);
            newState.counter = state.counter + 1; 
            return newState;
        case actionsTypes.DECREMENT:
            return{
                ...state,
                counter: state.counter - 1
            }
        case actionsTypes.ADD:
            return{
                ...state,
                counter: state.counter + action.value
            }
        case actionsTypes.SUB:
            return{
                ...state,
                counter: state.counter - action.value
            }
        case actionsTypes.STORE_RESULT:
            return{
                ...state,
                results: state.results.concat({id: new Date(), value: state.counter})
            }
        case actionsTypes.DELETE_RESULT:
            // const id = 2; from dispatch
            // const newArray = [...state.results];
            // newArray.splice(id, 1)
            const updatedArray = state.results.filter(result => result.id !== action.resulElementId)
            return{
                ...state,
                //results: newArray
                results: updatedArray
            }
    }
    return state
}

export default reducer;