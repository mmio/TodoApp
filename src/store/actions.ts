type TodoItem = {
    id: string,
    text: string,
    checked: boolean
}

export type TodoListState = {
    items: Array<TodoItem>
}

export type TodoAction = ReturnType<typeof addItem | typeof toggleItem>

export const addItem = (name: string) => ({
    type: 'ADD_ITEM',
    payload: name
})

export const toggleItem = (id: string) => ({
    type: 'TOGGLE_ITEM',
    payload: id
})