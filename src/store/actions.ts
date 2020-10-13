import { ADD_ITEM, TOGGLE_ITEM, DELETE_ITEM, TodoActionTypes } from './types'

export const addItem = (name: string): TodoActionTypes => ({
    type: ADD_ITEM,
    payload: name
})

export const toggleItem = (id: string): TodoActionTypes => ({
    type: TOGGLE_ITEM,
    payload: id
})

export const deleteItem = (id: string): TodoActionTypes => ({
    type: DELETE_ITEM,
    payload: id
})