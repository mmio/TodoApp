import React, { ReactElement } from 'react'
import Item from '../TodoItem/TodoItem'

import { TodoItem } from '../TodoContainer/TodoContainer'

type Props = {
    items: Array<TodoItem>
    onToggle: (id: string) => void
}

const CheckList: React.FC<Props> = ({ items, onToggle }) => (
        <>
            {
                items.map((item) =>
                    <Item key={item.id} item={item} onToggle={() => onToggle(item.id)}/>)
            }
        </>
)

export default CheckList
