import React from 'react'

import Checkbox from '../Checkbox/Checkbox'

import { TodoItem as Item } from '../TodoContainer/TodoContainer'

type Props = {
    item: Item
    showDeleteButton?: boolean
    onToggle: () => void
    onDelete: () => void
}

const TodoItem: React.FC<Props> = ({ item, showDeleteButton = true, onToggle, onDelete }) => (
    <>
        <Checkbox onToggle={onToggle} label={item.text} checked={item.checked} />
        {showDeleteButton &&
            <button onClick={onDelete}>Delete</button>}
        <br />
    </>
)

export default TodoItem
