import React from 'react'
import Item from '../TodoItem/TodoItem'

import { TodoItem } from '../TodoContainer/TodoContainer'

type Props = {
    items: Array<TodoItem>
}

const CheckList: React.FC<Props> = ({ items }) => (
        <>
        { items.map((item: TodoItem) => <Item key={item.id} item={item} />) }
        </>
)

export default CheckList
