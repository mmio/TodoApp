import React from 'react'

import { TodoItem as Item } from '../TodoContainer/TodoContainer'

type Props = {
    item: Item
}

const TodoItem: React.FC<Props> = ({ item }) => (
    <div>
        <input type={'checkbox'}/ >
        <span>{item.text}</span>
    </div>
)

export default TodoItem
