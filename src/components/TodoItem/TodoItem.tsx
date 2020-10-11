import React from 'react'

import Checkbox from '../Checkbox/Checkbox'

import { TodoItem as Item } from '../TodoContainer/TodoContainer'

type Props = {
    item: Item
    onToggle: () => void
}

const TodoItem: React.FC<Props> = ({ item, onToggle }) => (
    <>
        <Checkbox onToggle={onToggle} label={item.text} checked={item.checked} />
        <br />
    </>
)

export default TodoItem
