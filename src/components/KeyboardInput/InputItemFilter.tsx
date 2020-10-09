import React, { useEffect, useState } from 'react'

import { TodoItem } from '../TodoContainer/TodoContainer'
import KeyboardInput from './KeyboardInput'

type Props = {
    items: Array<TodoItem>
    placeholder: string
    onInputChange: (arg0: Array<TodoItem>) => void
    filter: (arg0: TodoItem, arg1: string) => boolean
}

const InputItemFilter: React.FC<Props> = ({ items, placeholder, onInputChange, filter}) => {
    const [currentInput, setCurrentInput] = useState('')

    const f = (item: TodoItem) => filter(item, currentInput)

    useEffect(() => {
        onInputChange(items.filter(f))
    }, [items, currentInput])

    return (
        <KeyboardInput
            placeholder={placeholder}
            onInputChange={(term) => setCurrentInput(term)}
            initValue={currentInput}
        />
    )
}

export default InputItemFilter
