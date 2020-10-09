import React, { ReactElement } from 'react'
import Item from '../TodoItem/TodoItem'

import { TodoItem } from '../TodoContainer/TodoContainer'

type Props = {
    items: Array<TodoItem>
    onToggle: (id: string) => void
}

const todoToReactElement = (item: TodoItem, onToggle: (id: string) => void): ReactElement =>
    <Item key={item.id} item={item} onToggle={() => onToggle(item.id)}/>

const CheckList: React.FC<Props> = ({ items, onToggle }) => (
        <>
            {items.map((item) => todoToReactElement(item, onToggle))}
        </>
)

export default CheckList
