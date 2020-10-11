import KeyboardInput from '../KeyboardInput/KeyboardInput'
import React, { useEffect, useState } from 'react'

import { TodoItem } from '../TodoContainer/TodoContainer'
import Checkbox from '../Checkbox/Checkbox'

type Props = {
    items: Array<TodoItem>
    onFilter: (arg0: Array<TodoItem>) => void
}

type FilterFunction<T> = {
    (arg0: T): boolean
}

const ItemFilter: React.FC<Props> = ({ items, onFilter }) => {
    const [showHidden, setShowHidden] = useState(false)
    const [searchTerm, setSearchTerm] = useState('')
    const [showCompleted, setShowCompleted] = useState(false)

    const filterMatchingItems = (item: TodoItem) =>
        item.text.toLowerCase().includes(searchTerm.toLowerCase())

    const filterCheckedItems = (item: TodoItem) =>
        item.checked === true

    const filterUncheckedItems = (item: TodoItem) =>
        item.checked === false

    const filterOnCondition = <T, >(condition: boolean, filter: FilterFunction<T>) =>
        (item: T) =>
            (condition)
            ? filter(item)
            : true

    const filters: Array<FilterFunction<TodoItem>> = [
        filterMatchingItems,
        filterOnCondition(showHidden, filterUncheckedItems),
        filterOnCondition(showCompleted, filterCheckedItems)
    ]
    
    useEffect(() => {
        const filteredItems = filters.reduce(
            (acc: Array<TodoItem>, filter: FilterFunction<TodoItem>) =>
                acc.filter(filter)
            ,items)

        onFilter(filteredItems)
    }, [items, showHidden, searchTerm, showCompleted])
    
    return (
        <>
            <KeyboardInput
                initValue={searchTerm}
                placeholder={'Search...'}
                onInputChange={setSearchTerm}
            />
            <br />
            <Checkbox
                checked={showHidden}
                label={'Hide completed'}
                onToggle={() => setShowHidden(!showHidden)}
            />
            <Checkbox
                checked={showCompleted}
                label={'Show completed'}
                onToggle={() => setShowCompleted(!showCompleted)}
            />
        </>
    )
}

export default ItemFilter
