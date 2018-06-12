import * as constants from '../actions'

export const nameReducer = (state = constants.initialState, action) => {
    switch(action.type){
        case constants.CHANGE_NAME:
            return action.name
        default:
            return state
    }
}

