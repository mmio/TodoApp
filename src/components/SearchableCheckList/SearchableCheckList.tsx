import React, { useState } from 'react'

import CheckList from '../CheckList/CheckList'
import ItemFilter from '../ItemFilters/ItemFilters'

import { TodoItem } from '../TodoContainer/TodoContainer'

type Props = {
    items: Array<TodoItem>
    onToggle: (id: string) => void
    onDelete: (id: string) => void
}

const SearchableCheckList: React.FC<Props> = ({ items, onToggle, onDelete}) => {
    const [filteredItems, setFilteredItems] = useState<Array<TodoItem>>(items)

    return (
        <>
            <ItemFilter items={items} onFilter={setFilteredItems} />
            <hr />
            <CheckList items={filteredItems} onToggle={onToggle} onDelete={onDelete}/>
            <hr />
        </>
    )
}

export default SearchableCheckList
