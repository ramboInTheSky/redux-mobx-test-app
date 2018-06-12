import {combineReducers} from 'redux'
import {nameReducer} from './nameReducer'
import {userReducer} from './userReducer'

export const rootReducer = combineReducers(
    {
        state: userReducer
    }
)

