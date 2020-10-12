import {ADD_ITEM, TOGGLE_ITEM, DELETE_ITEM} from './actionTypes'

export type TodoAction = ReturnType<typeof addItem | typeof toggleItem | typeof deleteItem>

export const addItem = (name: string) => ({
    type: ADD_ITEM,
    payload: name
})

export const toggleItem = (id: string) => ({
    type: TOGGLE_ITEM,
    payload: id
})

export const deleteItem = (id: string) => ({
    type: DELETE_ITEM,
    payload: id
})