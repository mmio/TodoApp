import React, { useState } from 'react'

import { v4 as uuidv4 } from 'uuid'

import SearchableCheckList from '../SearchableCheckList/SearchableCheckList'
import AddItemForm from '../AddItemForm/AddItemForm'

export type TodoItem = {
    id: string,
    text: string,
    checked: boolean
}

const addMockItem = (text: string, data: Array<TodoItem>): Array<TodoItem> => 
    [...data, {id: uuidv4(), text, checked: false}]

const toggleItem = (id: string, items: Array<TodoItem>) =>
    items.map(item => (item.id === id)
                        ? {...item, checked: !item.checked}
                        : item)

const mockItems = [
    {id: uuidv4(), text: 'Hello', checked: true},
    {id: uuidv4(), text: 'asdf', checked: false},
    {id: uuidv4(), text: 'j8il,', checked: true},
    {id: uuidv4(), text: '234fgt', checked: false}
]

const TodoContainer = () => {
    const [mockData, setMockData] = useState<Array<TodoItem>>(mockItems)

    const toggleById = (id: string) => setMockData(toggleItem(id, mockData))
    const addByName = (text: string) => setMockData(addMockItem(text, mockData))

    return (
        <div style={{margin: '0 auto', width: '300px'}}>
            <SearchableCheckList items={ mockData } onToggle={toggleById}/>
            <AddItemForm addAction={addByName}/>
        </div>
    )
}

export default TodoContainer
