import { v4 as uuidv4 } from 'uuid'
import {TodoAction} from './actions'
import produce from 'immer'

type TodoItem = {
    id: string,
    text: string,
    checked: boolean,
    deleted: boolean
}

export type TodoListState = {
    items: Array<TodoItem>
}

const initialState: TodoListState = {
    items: [
        {id: uuidv4(), text: 'Buy Milk', checked: false, deleted: false},
        {id: uuidv4(), text: 'Take out trash', checked: true, deleted: false},
        {id: uuidv4(), text: 'Finish homework', checked: true, deleted: true},
        {id: uuidv4(), text: 'Feed the dog', checked: false, deleted: true},
    ]
}

const addItem = (name: string, state: TodoListState) =>
    produce(state, draft => {
        draft.items.push({
            id: uuidv4(),
            text: name,
            checked: false,
            deleted: false
        })
    })

const toggleItem = (id: string, state: TodoListState) =>
    produce(state, draft => {
        const item = draft.items.find(item => item.id === id)

        if (item) {
            item.checked = !item.checked
        }
    })

const deleteItem = (id: string, state: TodoListState) =>
    produce(state, draft => {
        const item = draft.items.find(item => item.id === id)

        if (item) {
            item.deleted = true
        }
    })

const todoReducer = (
  state = initialState,
  action: TodoAction
): TodoListState => {
  switch (action.type) {
    case 'ADD_ITEM':
        return addItem(action.payload, state)
    case 'TOGGLE_ITEM':
        return toggleItem(action.payload, state)
    case 'DELETE_ITEM':
        return deleteItem(action.payload, state)
    default:
        return state
  }
}

export default todoReducer