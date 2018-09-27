import * as actionsTypes from '../actions/actions';

const initialState = {
    results: []
}

const reducer = (state = initialState, action)=>{
    switch(action.type){
        case actionsTypes.STORE_RESULT:
            return{
                ...state,
                results: state.results.concat({id: new Date(), value: action.result})
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