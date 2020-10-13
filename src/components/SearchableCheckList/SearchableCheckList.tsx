import React, { useState } from 'react'

import CheckList from '../CheckList/CheckList'
import ItemFilter from '../ItemFilters/ItemFilters'

import { TodoItem } from '../../store/types'

type Props = {
    items: Array<TodoItem>
    onToggle: (id: string) => void
    onDelete: (id: string) => void
}

const SearchableCheckList: React.FC<Props> = ({ items, onToggle, onDelete}) => {
    const [filteredItems, setFilteredItems] = useState<Array<TodoItem>>([])

    return (
        <>
            <ItemFilter items={items} onFilter={setFilteredItems} />
            <CheckList items={filteredItems} onToggle={onToggle} onDelete={onDelete}/>
        </>
    )
}

export default SearchableCheckList
