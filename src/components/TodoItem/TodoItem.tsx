import React from 'react'

import Checkbox from '../Checkbox/Checkbox'

import { TodoItem as Item } from '../TodoContainer/TodoContainer'

import styles from '../../styles/styles.module.css'

type Props = {
    item: Item
    showDeleteButton?: boolean
    onToggle: () => void
    onDelete: () => void
}

const TodoItem: React.FC<Props> = ({ item, showDeleteButton = true, onToggle, onDelete }) => (
    <div className={`${styles.horizontalContainer} ${styles.card}`}>
        <Checkbox
            onToggle={onToggle}
            label={item.text}
            checked={item.checked}
        />
        {showDeleteButton && <button onClick={onDelete}>X</button>}
    </div>
)

export default TodoItem
