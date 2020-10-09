import React, { useEffect, useState } from 'react'

import Checkbox from '../Checkbox/Checkbox'

import { TodoItem } from '../TodoContainer/TodoContainer'

type Props = {
    items: Array<TodoItem>
    label: string
    onFilter: (arg0: Array<TodoItem>) => void
    filter: (arg0: TodoItem) => boolean
}

const CheckboxItemFilter: React.FC<Props> = ({ items, label, onFilter, filter}) => {
    const [checkboxState, setCheckboxState] = useState(false)

    useEffect(() => {
        (checkboxState === true)
            ? onFilter(items.filter(filter))
            : onFilter(items)
    }, [items, checkboxState])

    return (
        <Checkbox
            checked={checkboxState}
            label={label}
            onToggle={() => setCheckboxState(!checkboxState)}
        />
    )
}

export default CheckboxItemFilter
