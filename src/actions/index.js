//actions
export const CHANGE_NAME = 'CHANGE_NAME'
export const GET_USER = 'GET_USER'

export const initialState = {
    user: {},
    name: null
}

//action creators
export const changeName = name => ({
    type: CHANGE_NAME,
    name
})

export const getUser = user => ({
    type: GET_USER,
    user
})

export const fetchData = name => dispatch => {
    return dispatch(fetchUser(name))
}

//middleware
export const fetchUser = name => dispatch => {
    return fetch('https://api.github.com/users/' + name)
        .then(data => data.json())
        .then(json => dispatch( getUser(json) ) )
}