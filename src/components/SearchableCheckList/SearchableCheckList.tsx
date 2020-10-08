import React, { useState } from 'react'
import InputForm from '../InputForm/InputForm'
import CheckList from '../CheckList/CheckList'

import { TodoItem } from '../TodoContainer/TodoContainer'

type Props = {
    items: Array<TodoItem>
}

const filterTerms = (items: Array<TodoItem>, term: string): Array<TodoItem> =>
    items.filter((item: TodoItem) => item.text.includes(term))

const SearchableCheckList: React.FC<Props> = ({ items }) => {
    const [searchTerm, setSearchTerm] = useState('')

    return (
        <>
            <InputForm onInputChange={ setSearchTerm } />
            <CheckList items={filterTerms(items, searchTerm)} />
        </>
    )
}

export default SearchableCheckList
