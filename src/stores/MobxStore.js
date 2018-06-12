import {
    observable,
    action
} from 'mobx'
import {
    FetchLib
} from './FetchLib'


export const mobxStore = observable({
    //initial state
    user: {},
    name: ''
})

export const getData = action(
    name => {
        mobxStore.name = name
        FetchLib.fetchUser(name).then(data => mobxStore.user = data)
    })

export const invalidateForm = action(
    partialName => {
        mobxStore.user = {}
        mobxStore.name = partialName
    })