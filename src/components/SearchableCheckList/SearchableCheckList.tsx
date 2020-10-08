import React, { useState } from 'react'
import KeyboardInput from '../InputForm/InputForm'
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
            <KeyboardInput onInputChange={ setSearchTerm } placeholder={'Search...'} initValue={searchTerm} />
            {/* <br />
            <input type={'checkbox'} name={'hide'} />
            <label htmlFor={'hide'}> Hide completed</label> */}
            <hr />
            <CheckList items={filterTerms(items, searchTerm)} />
            <hr />
        </>
    )
}

export default SearchableCheckList
