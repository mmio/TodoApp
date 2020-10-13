export type TodoItem = {
    id: string,
    text: string,
    checked: boolean,
    deleted: boolean
}

export type TodoListState = {
    items: Array<TodoItem>
}

export const ADD_ITEM = 'ADD_ITEM'
export const TOGGLE_ITEM = 'TOGGLE_ITEM'
export const DELETE_ITEM = 'DELETE_ITEM'

export type AddItemAction = {
    type: typeof ADD_ITEM,
    payload: string
}

export type ToggleItemAction = {
    type: typeof TOGGLE_ITEM,
    payload: string
}

export type DeleteItemAction = {
    type: typeof DELETE_ITEM,
    payload: string
}

export type TodoActionTypes = AddItemAction | ToggleItemAction | DeleteItemAction