import React from 'react'

import Item from '../TodoItem/TodoItem'

import { TodoItem } from '../../store/types'

type Props = {
    items: TodoItem[]
    showDeleteButton?: boolean
    onToggle?: (id: string) => void
    onDelete?: (id: string) => void
}

const CheckList: React.FC<Props> = ({
    items,
    showDeleteButton = true,
    onToggle = () => {},
    onDelete = () => {}
}) => (
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
