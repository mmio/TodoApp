import React, { useState } from 'react'

import { uuid } from 'uuidv4';

import SearchableCheckList from '../SearchableCheckList/SearchableCheckList'
import AddItemForm from '../AddItemForm/AddItemForm'

export type TodoItem = {
    id: string,
    text: string,
    checked: boolean
}

const addMockData = (text: string, data: Array<TodoItem>): Array<TodoItem> => {
    return [...data, {id: uuid(), text, checked: false}]
}

const TodoContainer = () => {
    const [mockData, setMockData] = useState<Array<TodoItem>>([
        {id: uuid(), text: 'Hello', checked: true},
        {id: uuid(), text: 'asdf', checked: false},
        {id: uuid(), text: 'j8il,', checked: true},
        {id: uuid(), text: '234fgt', checked: false}
    ])

    return (
        <>
            <SearchableCheckList items={ mockData }/>
            <AddItemForm addAction={ (text: string) => setMockData(addMockData(text, mockData)) }/>
        </>
    )
}

export default TodoContainer
