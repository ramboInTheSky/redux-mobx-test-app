import * as constants from '../actions'

export const userReducer = (state = constants.initialState, action) => {
    switch (action.type) {
        case constants.GET_USER:
            return {...state, user: action.user}
        case constants.CHANGE_NAME:
            return { ...state, name: action.name}
        default:
            return state
    }
}