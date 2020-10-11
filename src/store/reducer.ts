import { v4 as uuidv4 } from 'uuid'
import {TodoListState, TodoAction} from './actions'
import produce from 'immer'

const initialState: TodoListState = {items: []}

const toggleItem = (id: string, state: TodoListState) =>
    produce(state, draft => {
        const item = draft.items.find(item => item.id === id)

        if (item) {
            item.checked = !item.checked
        }
    })

const addItem = (name: string, state: TodoListState) =>
    produce(state, draft => {
        draft.items.push({id: uuidv4(), checked: false, text: name, deleted: false})
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