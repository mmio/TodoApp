import React, { useEffect, useState } from 'react'

import KeyboardInput from '../KeyboardInput/KeyboardInput'
import Checkbox from '../Checkbox/Checkbox'
import CheckboxItemFilter from '../Checkbox/CheckboxItemFilter'
import InputItemFilter from '../KeyboardInput/InputItemFilter'

import { TodoItem } from '../TodoContainer/TodoContainer'

type Props = {
    items: Array<TodoItem>
    onFilter: (arg0: Array<TodoItem>) => void
}

// type FilterOptions = {
//     searchTerm: string
//     hideCompleted: boolean
// }

// const createFilter = (flag: (arg0: FilterOptions) => boolean, condition: (arg0: TodoItem, arg1: FilterOptions) => boolean) =>
//     (options: FilterOptions) =>
//         (item: TodoItem) =>
//             flag(options) ? condition(item, options) : true

// const hideComletedFilter = createFilter(
//     options => options.hideCompleted,
//     item => item.checked === false
// )

// const termMatchFilter = createFilter(
//     options => options.searchTerm !== '',
//     (item, options) => item.text.toLowerCase().includes(options.searchTerm.toLowerCase())
// )

// const applyFilters = (items: Array<TodoItem>, filters: Array<(item: TodoItem) => boolean>): Array<TodoItem> =>
//     filters.reduce((filteredItems, filter) =>
//         filteredItems.filter(filter)
//     , items)

const ItemFilter: React.FC<Props> = ({ items, onFilter }) => {
    // const [filterOptions, setFilterOptions] = useState<FilterOptions>({
    //     searchTerm: '',
    //     hideCompleted: false,
    // })

    // const filters: Array<(item: TodoItem) => boolean> = [
    //     hideComletedFilter,
    //     termMatchFilter,
    // ].map(filter => filter(filterOptions))

    // useEffect(() => {
    //     onFilter(applyFilters(items, filters))
    // }, [items, filterOptions])

    // const setNewSearchterm = (searchTerm: string) => setFilterOptions({...filterOptions, searchTerm})
    // const setNewHidden = () => setFilterOptions({...filterOptions, hideCompleted: !filterOptions.hideCompleted})

    return (
        <>
            {/* <KeyboardInput
                initValue={filterOptions.searchTerm}
                placeholder={'Search...'}
                onInputChange={setNewSearchterm}
            />
            <br /> */}
            <InputItemFilter 
                placeholder={'Search...'}
                items={items}
                onInputChange={onFilter}
                filter={(item: TodoItem, term: string) => item.text.toLowerCase().includes(term.toLowerCase())}
            />
            {/* <Checkbox
                checked={filterOptions.hideCompleted}
                label={'Hide completed'}
                onToggle={setNewHidden}
            /> */}
            <br />
            <CheckboxItemFilter
                label={'Hide completed'}
                onFilter={onFilter}
                items={items}
                filter={(item) => !item.checked}
            />
        </>
    )
}

export default ItemFilter
