import React from 'react'
import Item from '../TodoItem/TodoItem'

import { TodoItem } from '../TodoContainer/TodoContainer'

type Props = {
    items: Array<TodoItem>
    showDeleteButton?: boolean
    onToggle?: (id: string) => void
    onDelete?: (id: string) => void
}

const CheckList: React.FC<Props> = ({items, showDeleteButton = true, onToggle = () => {}, onDelete = () => {} }) => (
        <>
            {
                items.map(item =>
                    <Item
                        key={item.id}
                        item={item}
                        onToggle={() => onToggle(item.id)}
                        onDelete={() => onDelete(item.id)}
                        showDeleteButton={showDeleteButton}
                    />)
            }
        </>
)

export default CheckList
